import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, Dimensions, Image, View } from 'react-native';

var _width = Dimensions.get("screen").width;

export default function Banner() {
  useEffect(()=> {
     _width = Dimensions.get("screen").width
  }, [Dimensions.get("screen").width])
  return (
    <View style={styles.container}>
      <Image
        style={{
            height: "100%",
            width: "100%",
        }}
        source={require('../assets/page_images/BannerQuizzImage.png')}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: _width,
    height: _width * 0.757638888888,
    overflow: "hidden"
  },
});
