import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import data from "../database/data.json";
import sortQuestion from "../services/sortQuestions"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class App extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };
  render() {
    return (
      <View style={styles.animationContainer}>
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 500,
            height: 500,
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});