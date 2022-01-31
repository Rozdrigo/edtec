import React, { useEffect } from 'react';
import { StyleSheet, Text, Dimensions, Image, View } from 'react-native';

var _width = Dimensions.get("screen").width;
export default function DoYouKnow(props) {
    useEffect(() => {
        _width = Dimensions.get("screen").width
    }, [Dimensions.get("screen").width])
    return (
        <View style={{
            height: 100,
            width: _width - 30,
            marginVertical: 10,
            backgroundColor: props.color,
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexDirection: "row",
            borderRadius: 10,
            overflow: 'hidden'
        }}>
            <View style={styles.boxText}>
                <View style={styles.subBoxText}>
                    <View><Text style={styles.emoji}>🤔</Text></View>
                    <View>
                        <Text style={styles._info}>{props.info01}</Text>
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
        </View>
    );
}

const styles = StyleSheet.create({
    boxText: {
        height: "100%",
        marginHorizontal: 20,
        justifyContent: 'center'
    },
    title: {
        marginTop: -19,
        marginBottom: 10,
        fontSize: 50,
        fontWeight: "bold",
        color: "white"
    },
    _info: {
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
        color: "#4FFA7B",
        fontWeight: 'bold',
        fontSize: 30,
        marginHorizontal: 10,
        textAlign: "center",
    },
    author: {
        color: "#fff",
        fontWeight: 'bold'
    }
});
