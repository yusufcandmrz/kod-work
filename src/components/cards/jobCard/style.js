import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

    container: {
        margin: 10,
        padding: 10,
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: "white",
    },
    name: {
        fontWeight: "bold",
        fontSize: 15,
    },
    location: {
        alignSelf: "flex-start",
        padding: 5,
        flex: 1,
        color: "white",
        backgroundColor: "#F4364C",
        borderRadius: 10,
    },
    level: {
        color: "#F4364C",
        alignSelf: "flex-end",
    }
})