import React, { useEffect, useState } from "react";
import { Text, ScrollView, View, ActivityIndicator, useWindowDimensions } from "react-native"
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
            setJobLocation(jobDetails.locations[0].name);
            setJobLevel(jobDetails.levels[0].name);
        }
    }, [jobDetails])
    const handleSubmit = () => {
        console.log("button clicked");
    }

    const handleFavoriteJob = () => {
        dispatch(addFavoriteJob(jobId))
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
            <View>
                {jobDetails &&
                    <View>
                        <Text>{jobDetails.name}</Text>
                        <Text> {jobLocation}</Text>
                        <Text>{jobLevel}</Text>
                        <HTML source={{ html: jobDetails.contents }} contentWidth={width} />
                    </View>
                }
            </View >
            <View style={styles.buttonContainer}>
                <Button onPress={handleSubmit} buttonTitle="Submit" />
                <Button onPress={handleFavoriteJob} buttonTitle="Favorite Job" />
            </View>
        </ScrollView>
    )
}

export default JobDetails;