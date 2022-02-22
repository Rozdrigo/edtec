import React, {useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Dimensions, StyleSheet, View, Text } from "react-native";
import BannerQuizz from "../components/BannerQuizz";
import {Picker} from '@react-native-picker/picker';

var _width = Dimensions.get("screen").width;

export default function TabOneScreen({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  useEffect(()=> {
    _width = Dimensions.get("screen").width
  }, [Dimensions.get("screen").width]);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <StatusBar style="light" backgroundColor="#282A36"/>
        <BannerQuizz/>
        <View style={styles.box}>
        <View style={styles.Picker}>
        <Text style={styles.Title}>Semestre</Text>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> 
        </View>
        <View style={styles.Picker}>
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker> 
        </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282A36"
  },
  Title: {
    position: "absolute",
    top: -14,
    left: 30,
    fontSize: 14,
    backgroundColor: "white",
    padding: 3
  },
  box: {
    height: 1000,
    marginTop: -45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: _width,
    backgroundColor: "white",
    padding: 15
  },
  homeText: {
    marginTop: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  Picker: {
    justifyContent: "center",
    height: 50,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderColor: "black",
    borderRadius: 50,
    borderWidth: 2
  },
  div: {
    height: 1,
    marginHorizontal: 15,
    width: _width - 60,
    backgroundColor: "#333",
    marginVertical: 5
  },
  markerText: {
    margin: 5,
    fontSize: 20,
    color: "#333"
  },
  marker: {
    width: _width - 60,
    borderColor: "#333",
    marginHorizontal: 15,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: 'center',
    fontSize: 30,
    justifyContent: "space-between"
  },
  markerSelecter: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    width: 90,
    padding: 3,
    borderRadius: 50,
    marginHorizontal: 10
  },
  markerSelecterText: {
    color: "#FFF"
  }
});
