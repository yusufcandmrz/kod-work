import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux"

import styles from "./style";

const FavoritedJobs = () => {

    const jobs = useSelector((state) => state.favoritedJobs);

    console.log(jobs)

    const renderItem = (item) => {

        return (
            <Text>{ }</Text>
        )
    }

    return (
        <FlatList data={jobs} renderItem={({ item }) => { return (<Text>{item}</Text>) }} />
    )
}

export default FavoritedJobs;