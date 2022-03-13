import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, Dimensions, Image, View, TouchableOpacity } from 'react-native';
import data from "../database/data.json"

var _width = Dimensions.get("screen").width;

export default function DoYouKnow(props) {
    const [text, setText] = useState("");

    useEffect(() => {
        setText(data.DoYouKnow[Math.floor(Math.random() * data.DoYouKnow.length)]);
        _width = Dimensions.get("screen").width
    }, [Dimensions.get("screen").width])
    return (
        <TouchableOpacity
        onPress={()=> {
            setText(data.DoYouKnow[Math.floor(Math.random() * data.DoYouKnow.length)]);
        }}
        activeOpacity={0.9}
        style={{
            height: 100,
            width: _width - 30,
            marginVertical: 10,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: props.color,
            alignItems: "flex-end",
            flexDirection: "row",
            borderRadius: 10,
            overflow: 'hidden'
        }}>
            <View style={styles.boxText}>
                <View style={styles.subBoxText}>
                    <View><Text style={styles.emoji}>🤔</Text></View>
                    <View>
                        <Text style={styles._info}>{text}</Text>
                    </View>
                </View>
            </View>
            <Image style={{
            height: "78%",
            width: "10%",
            position: 'relative',
            bottom: 0,
            right: 20
        }} source={require('../assets/page_images/DoYouKnowImage.png')}></Image>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    boxText: {
        height: "100%",
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: "center"
    },
    title: {
        marginTop: -19,
        marginBottom: 10,
        fontSize: 50,
        fontWeight: "bold",
        color: "white"
    },
    _info: {
        fontSize: 12,
        marginHorizontal: 5,
        color: "white",
        fontWeight: 'bold',
        width: _width / 100 * 60,
        textAlign: "center"
    },
    subBoxText:{
        flexDirection: "row",
        alignItems: "center"
    },  
    emoji: {
        position: "relative",
        color: "#4FFA7B",
        fontWeight: 'bold',
        fontSize: 30,
        left: 5,
        marginRight: 10,
        textAlign: "center",
    },
    author: {
        color: "#fff",
        fontWeight: 'bold'
    }
});
