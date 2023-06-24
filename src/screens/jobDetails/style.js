import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({

    container: {
        margin: 10,
    },
    name: {
        fontWeight: "bold",
        fontSize: 25,
        color: "black",
    },
    group: {
        flexDirection: "row",
    },
    groupTitle: {
        color: "#F4364C",
    },
    groupValue: {
        color: "black",
    },
    detailsTitle: {
        fontSize: 20,
        color: "black",
        alignSelf: "center",
    },
    detailsValue: {
        backgroundColor: "white",
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    buttonContainer: {
        flexDirection: "row",
    }
})