import React from "react";
import { Pressable, TouchableHighlight, StyleSheet, View, Text } from "react-native";

export default function Alternatives(props){
    return(
        <TouchableHighlight
        style={styles.container}
        >
            <Text style={styles.alternative}>{props.alternative}</Text>
            <Text style={styles.text}>{props.text}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#FEB",
        padding: 5,
        borderRadius: 50,
        alignItems: "center",
        marginTop: 10
    },
    alternative: {
        color: "#FEB",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        height: 25,
        width: 25,
        backgroundColor: "#FEBD00",
        borderRadius: 50,
        marginRight: 10,
        textAlignVertical: "center"
    },
    text:{
        color: "#262938",
        fontWeight: "bold"
    }
})