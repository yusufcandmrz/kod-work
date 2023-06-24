import React, { useEffect, useState } from "react";
import { FlatList, View, ActivityIndicator } from "react-native";
import axios from "axios";

import styles from "./style";
import Card from "../../components/cards/jobCard"

const Jobs = () => {

    const [jobList, setJobList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://www.themuse.com/api/public/jobs?page=0")
            .then(function (response) {
                setJobList(response.data.results)
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, [])

    const renderItem = ({ item }) => {

        return (
            <Card item={item} />
        )
    }
    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={jobList} renderItem={renderItem} />
        </View>
    )
}

export default Jobs;