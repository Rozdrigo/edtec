import { ScrollView, StyleSheet } from 'react-native';

export default function ModalScreen({navigation, route}) {

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  }
});
