import React, {useEffect, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { TouchableHighlight, Image, Dimensions, StyleSheet, View, Text, Pressable } from "react-native";
import BannerQuizz from "../components/BannerQuizz";
import {Picker} from '@react-native-picker/picker';
import data from '../database/data.json';
import { useFocusEffect } from "@react-navigation/native";

import AsyncStorage from "@react-native-async-storage/async-storage"

var _width = Dimensions.get("screen").width;

export default function OptionsQuizzScreen({ navigation }) {
  const [SelectSemestre, setSelectSemestre] = useState("Semestre I");
  const [SelectDiciplina, setSelectDiciplina] = useState();

  const [corrects, setCorrects] = useState(0);
  const [errors, setErrors] = useState(0);

  useFocusEffect(
    React.useCallback( () => {
      ( async () => {var x = await AsyncStorage.getItem("corrects");
      var y = await AsyncStorage.getItem("errors");
      setCorrects(x != null ? x : 0);
      setErrors(y != null ? y : 0);})()
    })
  );

  useEffect(()=> {
    _width = Dimensions.get("screen").width;
    setSelectDiciplina(Object.keys(data.Questions[SelectSemestre])[0])
  }, [Dimensions.get("screen").width]);

  function mapSemestres(){
    return Object.keys(data.Questions).map((a) => {
      return(
        <Picker.Item label={a} value={a}/>
      );
    })
  }
  function mapDisciplinas(){
    return Object.keys(data.Questions[SelectSemestre]).map((a) => {
      return(
        <Picker.Item label={a} value={a}/>
      );
    })
  }

  return (
    <>
      <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#282A36"/>
        <BannerQuizz/>
        <View style={styles.box}>
        <View style={styles.Picker}>
        <Text style={styles.Title}>Semestre</Text>
        <Picker
          selectedValue={SelectSemestre}
          onValueChange={(itemValue, itemIndex) => {
            setSelectSemestre(itemValue)
            setSelectDiciplina(Object.keys(data.Questions[itemValue])[0])
          }
          }>
          {mapSemestres()}
        </Picker> 
        </View>
        <View style={styles.Picker}>
        <Text style={styles.Title}>Disciplinas</Text>
        <Picker
          selectedValue={SelectDiciplina}
          onValueChange={(itemValue, itemIndex) =>
          setSelectDiciplina(itemValue)
          }>
            {mapDisciplinas()}
        </Picker>
        </View>
        <View
        style={{
            height: Dimensions.get("window").height - _width * 0.757638888888 - 215,
            width: _width - 30,
            padding: 20,
            marginVertical: 10,
            borderRadius: 10,
            backgroundColor: "#262938",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexDirection: "row",
            overflow: 'hidden'
        }}>
            <View style={styles.boxText}>
              <TouchableHighlight 
              activeOpacity={0.9}
              underlayColor="#FF5700"
              style={styles.buttom}
              onPress={()=>{
                navigation.navigate("QUIZZ", {
                  semestre: SelectSemestre,
                  disciplina: SelectDiciplina,
                  sort: 0
                })
              }}
              >
                <Text style={styles.title}>COMEÇAR</Text>
              </TouchableHighlight>
              <Text style={styles.info}>
                <Text style={styles.verify}>✓</Text> - {corrects}
                {"\n"}
                <Text style={styles.close}>✗</Text> - {errors}
              </Text>
            </View>
            <Image style={{
            height: 140,
            width: 220,
            position: 'relative',
            bottom: -20,
            right: 30
        }} source={require('../assets/page_images/QuizzImage.png')}></Image>
        </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  buttom: {
    backgroundColor: "#FF5700",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    marginBottom: 20
  },
  boxText: {
      height: "100%",
  },
  title: {
      fontSize: 40,
      fontWeight: "bold",
      color: "white"
  },
  info: {
      color: "white",
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: "justify"
  },
  verify: {
      color: "#4FFA7B",
      fontWeight: 'bold'
  },
  close: {
      color: "#FF0000",
      fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: "#282A36"
  },
  Title: {
    borderRadius: 50,
    borderColor: "#333",
    borderWidth: 2,
    position: "absolute",
    top: -15,
    left: 30,
    fontSize: 14,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingLeft: 18,
    paddingTop: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  box: {
    height: Dimensions.get("window").height - _width * 0.757638888888,
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
    marginVertical: 10,
    justifyContent: "center",
    height: 50,
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
