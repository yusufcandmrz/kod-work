import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

const JobCard = (props) => {

    const { item } = props;
    const { name, locations, levels } = item;
    const navigation = useNavigation();
    const [jobLocation, setJobLocation] = useState("");
    const [jobLevel, setJobLevel] = useState("");

    useEffect(() => {
        if (locations.length > 0) {
            setJobLocation(locations[0].name);
        }
        if (levels.length > 0) {
            setJobLevel(levels[0].name);
        }
    }, [locations, levels])

    function goToJobDetails() {
        navigation.navigate("Job Details", { jobId: item.id });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goToJobDetails}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location}>{jobLocation}</Text>
                <Text style={styles.level}>{jobLevel}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default JobCard;