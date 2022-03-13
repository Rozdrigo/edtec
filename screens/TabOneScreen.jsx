import React, { useEffect, useState } from "react";
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Picker,
} from "react-native";
import Banner from "../components/Banner";
import BoxQuizz from "../components/BoxQuizz";
import DoYouKnow from "../components/DoYouKnow";
import BoxContent from "../components/ButtonBoxContent";
import { useFocusEffect } from "@react-navigation/native";
import { Link } from "@react-navigation/native"

import data from "../database/data.json";

import Search from "../components/Search";

var _width = Dimensions.get("screen").width;

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TabOneScreen({ navigation }) {
  const [corrects, setCorrects] = useState(0);
  const [errors, setErrors] = useState(0);
  const [semestre, setSemestre] = useState("Semestre I");

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        var x = await AsyncStorage.getItem("corrects");
        var y = await AsyncStorage.getItem("errors");
        setCorrects(x != null ? x : 0);
        setErrors(y != null ? y : 0);
      })();
    })
  );

  useEffect(() => {
    _width = Dimensions.get("screen").width;
  }, [Dimensions.get("screen").width]);

  var mapSemestres = Object.keys(data.Disciplinas).map((a) => (
    <Picker.Item label={a.toUpperCase()} value={a} />
  ), []);

  var render = Object.keys(data.Disciplinas[semestre]).map((b, c) => (
    <BoxContent
      key={c}
      color="#282A36"
      title={b}
      subtitle={semestre}
      module={semestre}
      subModule={b}
      to="CONTEÚDO"
      navigation={navigation}
    />
  ));
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Banner />
        <View style={styles.box}>
          <Search navigation={navigation}></Search>
          <Text style={styles.homeText}>Você sabia?</Text>
          <DoYouKnow
            color="#FF5700"
            navigation={navigation}
            info01="Escalimetro não é régua"
          />
          <BoxQuizz
            color="#262938"
            corrects={corrects}
            errors={errors}
            navigation={navigation}
          />
          <View
            style={{
              marginHorizontal: 10,
              borderBottomColor: "#333",
              borderBottomWidth: 2,
              height: 45,
              fontSize: 40,
              marginBottom: 10,
            }}
          >
            <Picker
              style={styles.Picker}
              selectedValue={semestre}
              onValueChange={(itemValue) => setSemestre(itemValue)}
            >
              {mapSemestres}
            </Picker>
          </View>
          {render}
        </View>
        <Link style={styles.me} to={{screen: 'MEMORIAL'}}>Desenvolvido com <Text style={styles.bold}>♥</Text> por <Text style={styles.bold}>Edificações</Text> (2019 - 2021)</Link>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold"
  },
  me: {
    backgroundColor: "#F0F0FB",
    textAlign: "center",
    fontSize: 12,
    padding: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#FEBD00",
  },
  box: {
    marginTop: -45,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: _width,
    backgroundColor: "white",
    padding: 15,
  },
  homeText: {
    marginTop: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  div: {
    height: 1,
    marginHorizontal: 15,
    width: _width - 60,
    backgroundColor: "#333",
    marginVertical: 5,
  },
  markerText: {
    margin: 5,
    fontSize: 20,
    color: "#333",
  },
  marker: {
    width: _width - 60,
    borderColor: "#333",
    marginHorizontal: 15,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    fontSize: 30,
    justifyContent: "space-between",
  },
  markerSelecter: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333",
    width: 90,
    padding: 3,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  markerSelecterText: {
    color: "#FFF",
  },
});
