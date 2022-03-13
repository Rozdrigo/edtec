import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import sortQuestion from "../services/sortQuestions"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from 'react-native';
import { Toast } from "react-native-toast-message/lib/src/Toast";

export default class App extends React.Component {

  componentDidMount() {
    this.animation.play();
    this.animation.forceUpdate()
    Toast.show({
      topOffset: 10,
      type: "error",
      text1: "Infelizmente não foi dessa vez",
      text2:
        "A alternativa correta não foi selecionada ☹️",
    })
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };
  
  render() {
    return (
      <View style={styles.animationContainer}>
        <Toast />
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
          }}
          source={require("../assets/Animation/erro.json")}
          loop={false}
          onAnimationFinish={ async ()=>{
            var response = await AsyncStorage.getItem("errors");
            if(response == null){
              await AsyncStorage.setItem("errors", "1");
            }else{
              response = parseInt(response)
              await AsyncStorage.setItem("errors", `${response+1}`);
            }
            this.props.navigation.navigate("QUIZZ", {
              semestre: this.props.route.params.semestre,
              disciplina: this.props.route.params.disciplina,
              sort: sortQuestion(this.props.route.params.semestre, this.props.route.params.disciplina, this.props.route.params.sort)
            })
          }
        }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});