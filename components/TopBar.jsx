import React, { useEffect } from 'react';
import { StyleSheet, Text, Dimensions, View } from 'react-native';

var _width = Dimensions.get("screen").width;
export default function TopBar(props) {
    useEffect(() => {
        _width = Dimensions.get("screen").width
    }, [Dimensions.get("screen").width])
    return (
        <View style={styles.content}>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingTop: 25,
        paddingHorizontal: 20,
        width: _width,
        height: 20,
        backgroundColor: "#FEBD00",
        position: "absolute",
        top: 0,
        left: 0,
        elevation: 10,
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "#644b00",
    }
});
