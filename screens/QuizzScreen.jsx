import { useState, useEffect } from "react";
import {
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import data from "../database/data.json";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import Thinking from "../components/Thinking";

var _width = Dimensions.get("screen").width;

export default function ModalScreen({ navigation, route }) {
  const { semestre, disciplina, sort } = route.params;
  const content = data.Questions[semestre][disciplina];

  var correct;
  const [select, setSelect] = useState();

  function randomPickQuestion() {
    var n = content[sort];
    var abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    correct = abc.split("")[n.Correct];
    return (
      <View>
        <Text
          style={{
            textAlign: "justify",
            fontSize: 16,
            fontStyle: "italic",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            {1+sort}
          </Text>{" "}
          - {n.Enunciate}
        </Text>
        {n.image != null ? (
          <Image
            resizeMode="contain"
            source={{ uri: n.Image }}
            style={styles.image}
          />
        ) : (
          <Thinking />
        )}
        {n.Alternatives.map((a, b) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setSelect(abc.split("")[b]);
            }}
            style={styles.content}
          >
            {select == abc.split("")[b] ? (
              <Text style={styles.altselect}>{abc.split("")[b]}</Text>
            ) : (
              <Text style={styles.alternative}>{abc.split("")[b]}</Text>
            )}
            <Text style={styles.text}>- {a}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
  return (
    <>
      <View
        style={{
          elevation: 1000,
        }}
      >
        <Toast />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View
          style={{
            marginBottom: 25,
          }}
        >
          {randomPickQuestion()}
        </View>
      </ScrollView>
      <View style={styles.bottombox}>
        <TouchableOpacity
          onPress={() => {
            {
              select == undefined
                ? Toast.show({
                    topOffset: 10,
                    type: "error",
                    text1: "Nenhuma alternativa foi selecionada",
                    text2:
                      "Verifique se uma alternativa foi corretamente selecionada. 🤔",
                  })
                : select == correct
                ? navigation.navigate("SUCCESS", {
                    semestre: semestre,
                    disciplina: disciplina,
                    sort: sort,
                  })
                : navigation.navigate("ERROR", {
                    semestre: semestre,
                    disciplina: disciplina,
                    sort: sort,
                  });
            }
            setSelect(undefined);
          }}
          activeOpacity={0.9}
          style={styles.conbuttom}
        >
          <Text style={styles.textbuttom}>CONFIRMAR</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 15,
  },
  bottombox: {
    backgroundColor: "#FFF",
    zIndex: 200,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,

    elevation: 17,
  },
  text: {
    marginTop: 6.5,
    width: _width - 80,
    textAlign: "justify",
    fontStyle: "italic",
    color: "#262938",
  },
  textbuttom: {
    fontWeight: "bold",
    color: "#FFF",
  },
  conbuttom: {
    padding: 12,
    backgroundColor: "#00944B",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  image: {
    height: 200,
    width: 400,
  },
  content: {
    flexDirection: "row",
    marginTop: 10,
    paddingRight: 30,
  },
  alternative: {
    color: "#FEB",
    fontSize: 16,
    textAlign: "center",
    height: 25,
    width: 25,
    backgroundColor: "#FEBD00",
    borderRadius: 50,
    margin: 4,
    marginRight: 10,
    textAlignVertical: "center",
  },
  altselect: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    height: 25,
    width: 25,
    backgroundColor: "#6D6ADB",
    borderRadius: 50,
    margin: 4,
    marginRight: 10,
    textAlignVertical: "center",
  },
});
