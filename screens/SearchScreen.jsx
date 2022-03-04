import React, { useState } from "react";
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";
import BoxContent from "../components/ButtonBoxContent";
import data from "../database/data.json";
import { View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { StatusBar } from "react-native";

var _width = Dimensions.get("screen").width;

export default function SearchScreen({ navigation }) {
  const [input, setInput] = useState("");
  function cleanString(string) {
    return string
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase()
      .replace(/ /g, "")
      .replace(/\./g, "");
  }
  function searchKeyWords() {
    var returns = [];
    Object.keys(data.Disciplinas).map((a) => {
      Object.keys(data.Disciplinas[a]).map((b) => {
        if (cleanString(b).search(cleanString(input)) != -1) {
          returns.push({
            title: b,
            subtitle: a,
            color: "#262938",
            module: a,
            subModule: b,
            to: "CONTEÚDO",
          });
        }
        Object.keys(data.Disciplinas[a][b]).map((c) => {
          if (cleanString(c).search(cleanString(input)) != -1) {
            returns.push({
              title: c,
              subtitle: b == null ? data.Disciplinas[a][b][c].Title : b,
              color: "#FF5700",
              module: a,
              subModule: b,
              to: "MATERIAL",
            });
          }
        });
      });
    });
    return returns.map((a) => {
      return (
        <BoxContent
          key={Math.random() * 100}
          color={a.color}
          title={a.title}
          subtitle={a.subtitle}
          module={a.module}
          subModule={a.subModule}
          to={a.to}
          navigation={navigation}
        />
      );
    });
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <Pressable
          style={{
            marginRight: 12,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Icon size={25} name="arrow-back" />
        </Pressable>
        <View
          style={{
            marginVertical: 12,
            width: _width - 70,
            paddingHorizontal: 10,
            alignItems: "center",
            height: 38,
            borderRadius: 100,
            borderColor: "#333",
            borderWidth: 1,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon
            size={20}
            name="search"
            style={{
              marginRight: 10,
            }}
          />
          <TextInput onChangeText={setInput} autoFocus={true} />
        </View>
      </View>
      <ScrollView
        style={styles.scrollview}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            borderColor: "black",
            marginBottom: 15,
          }}
        >
          {searchKeyWords()}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    height: 80 - StatusBar.currentHeight,
    paddingHorizontal: 15,
    marginTop: StatusBar.currentHeight,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,

    elevation: 2,
  },
});
