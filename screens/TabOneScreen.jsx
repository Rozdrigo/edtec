import React, {useEffect} from "react";
import { ScrollView, Dimensions, StyleSheet, Text, View } from "react-native";
import Banner from "../components/Banner";
import BoxQuizz from "../components/BoxQuizz";
import DoYouKnow from "../components/DoYouKnow";
import BoxContent from "../components/ButtonBoxContent";

import data from "../database/data.json";

import Search from "../components/Search";

var _width = Dimensions.get("screen").width

export default function TabOneScreen({ navigation }) {

  useEffect(()=> {
    _width = Dimensions.get("screen").width
  }, [Dimensions.get("screen").width]);

  var render = Object.keys(data.Disciplinas).map((a) =>
    Object.keys(data.Disciplinas[a]).map((b, c) => (
      <BoxContent
        key = {c}
        color="#282A36"
        title={b}
        subtitle={a}
        module={a}
        subModule={b}
        to="Conteúdos"
        navigation={navigation}
      />
    ))
  );
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Banner/>
        <View style={styles.box}>
          <Search></Search>
          <Text style={styles.homeText}>Você sabia?</Text>
          <DoYouKnow
            color="#FF5700"
            info01="Escalimetro não é régua"
          />
          <View style={styles.div}/>
          <BoxQuizz color="#262938"
            info01={10}
            info02={7}
            navigation={navigation}
          />
          <View style={styles.marker}>
            <View><Text style={styles.markerText}>DISCIPLINAS</Text></View>
            <View style={styles.markerSelecter}><Text style={styles.markerSelecterText}>SEMESTRE I</Text></View>
        </View>
        {render}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEBD00"
  },
  box: {
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
