import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, ActivityIndicator, useWindowDimensions, Alert } from "react-native"
import axios from "axios";
import HTML from "react-native-render-html"
import { useDispatch } from "react-redux"
import { addFavoriteJob } from "../../store";

import styles from "./style";
import Button from "../../components/button";

const JobDetails = ({ route }) => {

    const { jobId } = route.params
    const [loading, setLoading] = useState(true);
    const [jobDetails, setJobDetails] = useState(null);
    const [jobLocation, setJobLocation] = useState("");
    const [jobLevel, setJobLevel] = useState("");
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(`https://www.themuse.com/api/public/jobs/${jobId}`)
            .then(function (response) {
                setJobDetails(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, []);

    useEffect(() => {
        if (jobDetails) {
            if (jobDetails.locations.length > 0) {
                setJobLocation(jobDetails.locations[0].name);
            }
            if (jobDetails.levels.length > 0) {

                setJobLevel(jobDetails.levels[0].name);
            }
        }
    }, [jobDetails])
    const handleSubmit = () => {
        Alert.alert("Success", "Your job application has been submitted successfully.");
    }

    const handleFavoriteJob = () => {
        dispatch(addFavoriteJob(jobId))
        Alert.alert("Success", "Job has been added to favorites.");
    }

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                {jobDetails &&
                    <View>
                        <Text style={styles.name}>{jobDetails.name}</Text>
                        <View style={styles.group}>
                            <Text style={styles.groupTitle}>Location: </Text>
                            <Text style={styles.groupValue}>{jobLocation}</Text>
                        </View>
                        <View style={styles.group}>
                            <Text style={styles.groupTitle}>Level: </Text>
                            <Text style={styles.groupValue}>{jobLevel}</Text>
                        </View>
                        <Text style={styles.detailsTitle}>Job Detail</Text>
                        <View style={styles.detailsValue}>
                            <HTML source={{ html: jobDetails.contents }} contentWidth={width} />
                        </View>
                    </View>
                }
            </View >
            <View style={styles.buttonContainer}>
                <Button onPress={handleSubmit} buttonTitle="Submit" />
                <Button onPress={handleFavoriteJob} buttonTitle="Favorite Job" />
            </View>
        </ScrollView >
    )
}

export default JobDetails;