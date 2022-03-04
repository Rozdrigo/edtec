import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

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
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            position: 'relative',
          }}
          source={require(`../assets/Animation/83701-construction.json`)}
        />
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 20,
  },
});