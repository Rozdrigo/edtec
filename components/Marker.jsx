import React, { useEffect } from 'react';
import { StyleSheet, Text, Dimensions, Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

var _width = Dimensions.get("screen").width;
export default function Marker(props) {
    useEffect(() => {
        _width = Dimensions.get("screen").width
    }, [Dimensions.get("screen").width])
    return (
        <View style={{
            height: 50,
            width: _width - 40,
            marginVertical: 10,
            marginHorizontal: 20,
            borderColor: props.color,
            borderBottomWidth: 2,
            flexDirection: "row",
            alignItems: 'center',
            fontSize: 30,
            justifyContent: "space-between"
        }}>
            <View><Text style={{
                marginLeft: 10,
                fontSize: 22,
                fontWeight: "bold",
                textTransform: "uppercase",
                color: props.color
            }}>{props.title}</Text></View>
            <View><Icon style={styles.mark} name="bookmark" size={22} color={props.color} /></View>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: {
        justifyContent: "center",
    },
    mark: {
        marginRight: 10
    },
});
