import React, { useEffect } from "react";

import { StyleSheet, TouchableOpacity, Text, Dimensions, View } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

var _width = Dimensions.get("screen").width;
export default function buttonBoxContent(props) {
  useEffect(() => {
    _width = Dimensions.get("screen").width;
  }, [Dimensions.get("screen").width]);
  return (
    <TouchableOpacity
    activeOpacity={0.9}
      onPress={() => {
        props.navigation.navigate(props.to, {
          title: props.title,
          subtitle: props.subtitle,
          module: props.module,
          subModule: props.subModule,
        });
      }}
      style={styles.container}
    >
      <View
        style={{
          backgroundColor: props.color,
          borderRadius: 1000,
          height: 35,
          width: 35,
          margin: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon name="book" size={18} color="white" />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{props.title.length > 32 ? props.title.slice(0, 32) + "..." : props.title}</Text>
        <Text style={styles.subtitle}>{props.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: _width - 30,
    marginTop: 10,
    borderRadius: 50,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0FB"
  },
  textBox: {
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    color: "#262938",
  },
  subtitle: {
    fontSize: 12,
    color: "#5B5B5B",
  },
});
