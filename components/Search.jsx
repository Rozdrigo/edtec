import React, { useEffect } from 'react';
import { StyleSheet, Text, Dimensions, Image, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

var _width = Dimensions.get("screen").width;

export default function Search(props) {

    useEffect(() => {
        _width = Dimensions.get("screen").width
    }, [Dimensions.get("screen").width])

    return (
        <Pressable 
        style={styles.container}
        onPress={()=>{
            props.navigation.navigate("BUSCA");
        }}
        >
            <Icon color="#333" size={20} name="search"/>
            <Text style={styles.placeholder}>O que você deseja encontrar?</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        width: _width - 30,
        paddingHorizontal: 10,
        alignItems: 'center',
        height: 38,
        borderRadius: 100,
        borderColor: "#333",
        borderWidth: 1,
        flexDirection: "row"
    },
    placeholder: {
        color: "#333",
        marginHorizontal: 10
    }
});
