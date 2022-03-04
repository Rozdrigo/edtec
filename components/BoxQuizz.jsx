import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
  Image,
  View,
} from "react-native";

var _width = Dimensions.get("screen").width;
export default function BoxQuizz(props) {

    useEffect(async () => {
    _width = Dimensions.get("screen").width;
  });
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        props.navigation.navigate("OPÇÕES", props.navigation);
      }}
      style={{
        height: 100,
        width: _width - 30,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: props.color,
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <View style={styles.boxText}>
        <Text style={styles.title}>QUIZZ</Text>
        <Text style={styles.info}>
          <Text style={styles.verify}>✓</Text> - {props.corrects}{" "}
          <Text style={styles.close}>✗</Text> - {props.errors}
        </Text>
      </View>
      <Image
        style={{
          height: "78%",
          width: "40%",
          position: "relative",
          bottom: 0,
          right: 30,
        }}
        source={require("../assets/page_images/QuizzImage.png")}
      ></Image>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  boxText: {
    height: "100%",
    marginHorizontal: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  info: {
    color: "white",
    fontWeight: "bold",
  },
  verify: {
    color: "#4FFA7B",
    fontWeight: "bold",
  },
  close: {
    color: "#FF0000",
    fontWeight: "bold",
  },
});
