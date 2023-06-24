import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { removeFavoriteJob } from "../../../store";

import styles from "./style";
import Button from "../../button";

const FavoritedJobCard = (props) => {
    const { id } = props;
    const [jobDetails, setJobDetails] = useState({});
    const [jobName, setJobName] = useState("");
    const [jobLocation, setJobLocation] = useState("");
    const [jobLevel, setJobLevel] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        axios
            .get(`https://www.themuse.com/api/public/jobs/${id}`)
            .then(function (response) {
                setJobDetails(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        if (jobDetails.name) {
            setJobName(jobDetails.name);
        }
        if (jobDetails.locations && jobDetails.locations.length > 0) {
            setJobLocation(jobDetails.locations[0].name);
        }
        if (jobDetails.levels && jobDetails.levels.length > 0) {
            setJobLevel(jobDetails.levels[0].name);
        }
    }, [jobDetails]);

    function handleButton() {
        dispatch(removeFavoriteJob(id))
    }

    return (
        <View style={styles.container}>
            {!!jobDetails && (
                <View>
                    <Text>{jobName}</Text>
                    <Text>{jobLocation}</Text>
                    <Text>{jobLevel}</Text>
                    <Button onPress={handleButton} buttonTitle="Remove" />
                </View>
            )}
        </View>
    );
};

export default FavoritedJobCard;
