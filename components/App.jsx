import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

import Banner from './src/modules/banner'
import BoxContent from './src/modules/buttonBoxContent'
import BoxQuizz from './src/modules/BoxQuizz';
import Marker from './src/modules/Marker'
import DoYouKnow from './src/modules/DoYouKnow';
import TopBar from './src/modules/TopBar';

import data from './src/database/data.json'

export default function App() {
  var render = Object.keys(data.Disciplinas).map((a) => data.Disciplinas[a].map((b) => <BoxContent color="#282A36" title={b.length > 32 ? b.slice(0, 32) + "..." : b} subtitle={a} />))
  return (
    <>
      <TopBar></TopBar>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <StatusBar />
        <Banner></Banner>
        <BoxQuizz color="#282A36" info01="10" info02="7"></BoxQuizz>
        <DoYouKnow color="#FF5700" info01="Escalimetro não é régua" info02="Paula Cristiane"></DoYouKnow>
        <Marker color="#282A36" title="Disciplinas"></Marker>
        {render}
      </ScrollView>
    </>
  );
}
//Adicionar animação no banner;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
