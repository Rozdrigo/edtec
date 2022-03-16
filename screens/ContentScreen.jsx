import { ScrollView, View, StyleSheet, Text } from 'react-native';

import data from '../database/data.json';
import Animation from "../components/Animation"
import BoxContent from  '../components/ButtonBoxContent';

export default function ModalScreen({navigation, route}) {
  const { title, subtitle } = route.params;

  var content = data.Disciplinas[subtitle][title]
  
  var ContentList = Object.keys(content).map((b, c) => (
    b != "Type" ?
    <BoxContent
        key={c}
        color="#FF5700"
        title={b}
        navigation={navigation}
        to="MATERIAL"
        subtitle={content[b].Title == undefined ? title : content[b]["Title"]}
        module={subtitle}
        subModule={title}
      />
      :
      null
    ))

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Animation name="81215-error-x.json"/>
      <View
        style={{
          marginTop: 15,
          marginBottom: 30
        }}
      >
        {ContentList[0] == undefined ? <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          margin: 20,
        }}
        > 📝 Nada por aqui, ainda...</Text>: ContentList}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
