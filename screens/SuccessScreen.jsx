import React from 'react';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import sortQuestion from "../services/sortQuestions"

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
            width: 400,
            height: 400,
          }}
          source={require("../assets/Animation/64787-success.json")}
          loop={false}
          onAnimationFinish={ async ()=>{
            var response = await AsyncStorage.getItem("corrects");
            if(response == null){
              await AsyncStorage.setItem("corrects", "1");
            }else{
              response = parseInt(response)
              await AsyncStorage.setItem("corrects", `${response+1}`);
            }
            this.props.navigation.navigate("QUIZZ", {
              semestre: this.props.route.params.semestre,
              disciplina: this.props.route.params.disciplina,
              sort: sortQuestion(this.props.route.params.semestre, this.props.route.params.disciplina, this.props.route.params.sort)
            })
          }}
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