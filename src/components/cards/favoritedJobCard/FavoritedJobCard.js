import axios from "axios";
import React, { useEffect, useState } from "react"
import { Text, View } from "react-native"

import styles from "./style";

const FavoritedJobCard = (props) => {

    const { id } = props;
    const [jobDetails, setJobDetails] = useState([]);

    useEffect(() => {
        axios
            .get(`https://www.themuse.com/api/public/jobs/${id}`)
            .then(function (response) {
                setJobDetails(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
    }, []);

    return (
        <View style={styles.container}>
            {jobDetails &&
                <View>
                    <Text>{jobDetails.name}</Text>
                </View>
            }
        </View>
    )
}

export default FavoritedJobCard;