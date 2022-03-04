import { ScrollView, View, StyleSheet } from 'react-native';
import data from "../database/data.json";
import BoxContent from '../components/ButtonBoxContent';
import Search from '../components/Search';

export default function TabTwoScreen({ navigation }) {
  var render = Object.keys(data.Disciplinas).map((a) =>
  Object.keys(data.Disciplinas[a]).map((b, c) => (
    <BoxContent
      key = {c}
      color="#282A36"
      title={b}
      subtitle={a}
      module={a}
      subModule={b}
      to="CONTEÚDO"
      navigation={navigation}
    />
  ))
);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.box}>
        <Search navigation={navigation}/>
        {render}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "#fff"
  },
  box: {
    marginVertical: 15,
  }
});
