import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { useSelector } from "react-redux"

import styles from "./style";
import FavoritedJobCard from "../../components/cards/favoritedJobCard";

const FavoritedJobs = () => {

    const favoritedJobList = useSelector((state) => state.favoritedJobs);

    return (
        <FlatList data={favoritedJobList} renderItem={({ item }) => { return (<FavoritedJobCard id={item} />) }} />
    )
}

export default FavoritedJobs;