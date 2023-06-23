import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import axios from "axios";

import styles from "./style";
import Card from "../../components/cards/jobCard"

const Jobs = () => {

    const [jobList, setJobList] = useState([]);

    useEffect(() => {
        axios.get("https://www.themuse.com/api/public/jobs?page=0")
            .then(function (response) {
                setJobList(response.data.results)
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

    return (
        <View>
            <FlatList data={jobList} renderItem={renderItem} />
        </View>
    )
}

export default Jobs;