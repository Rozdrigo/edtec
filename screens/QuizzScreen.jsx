import { ScrollView, StyleSheet } from 'react-native';

import data from '../database/data.json';

import BoxContent from  '../components/ButtonBoxContent';

export default function ModalScreen({navigation, route}) {
  const { title, subtitle } = route.params;

  var content = data.Disciplinas[subtitle][title]
  
  var ContentList = Object.keys(content).map((b, c) => (
    <BoxContent
        key={c}
        color="#282A36"
        title={b.length > 32 ? b.slice(0, 32) + "..." : b}
        navigation={navigation}
        to="Material"
        subtitle={content[b].Title == undefined ? title : content[b]["Title"]}
        module={subtitle}
        subModule={title}
      />
    ))

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {ContentList}
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
