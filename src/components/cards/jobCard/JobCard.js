import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./style";

const JobCard = (props) => {

    const { item } = props;
    const navigation = useNavigation();

    function goToJobDetails() {
        navigation.navigate("Job Details", { jobId: item.id });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goToJobDetails}>
                <Text>{item.name}</Text>
                <Text>{item.locations[0].name}</Text>
                <Text>{item.levels[0].name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default JobCard;