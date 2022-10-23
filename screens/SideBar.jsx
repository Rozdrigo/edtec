import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StatusBar, StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native';
import Animation from '../components/Animation';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function SideBar({ navigation }) {

  function NavBarIcon(props) {
    return <View style={{
      width: 35, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 5,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    }}><FontAwesome size={26} {...props} /></View>;
  }

  function TrashButton(props){
    return (
      <Pressable style={{
        width: '100%',
        height: 50,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 1,
      }}
        onPress={()=> {
          AsyncStorage.setItem("corrects", "0");
          AsyncStorage.setItem("errors", "0");
        }}
      >
        <NavBarIcon name={props.icon} color="#FF9900"/>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            borderRadius: 5,
            marginHorizontal: 4,
            width: '85%',
            height: 35,
            justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
      
            elevation: 5,
          }}
        >
          <Text style={{
            alignItems: 'center',
            marginHorizontal: 12,
            fontSize: 19,
            color: '#333'
          }}>{props.name}</Text>
        </View>
      </Pressable>
    )
  }

  function Button(props){
    return (
      <Pressable style={{
        width: '100%',
        height: 50,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 1,
      }}
        onPress={()=> {navigation.navigate('Root'); setTimeout(()=>navigation.navigate(props.to),400)}}
      >
        <NavBarIcon name={props.icon} color="#FF9900"/>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 5,
            marginHorizontal: 4,
            width: '82%',
            height: 35,
            justifyContent: 'center',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
      
            elevation: 5,
          }}
        >
          <Text style={{
            marginHorizontal: 12,
            fontSize: 19,
            color: '#333'
          }}>{props.name}</Text>
        </View>
      </Pressable>
    )
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '100%', width: '60%', backgroundColor: "#FEBD00",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.00,
      
          elevation: 24,
        }}
      >
        <View
          style={{
            height: '91%'
          }}
        >
          <View style={{
            margin: 10,
            marginTop: 30,
            marginBottom: 50
          }}>
            <Animation/>
          </View>
          <View style={{
            marginHorizontal: 10
          }}>
            <Button to="BUSCA" name="Busca" icon="search"/>
            <Button to="DISCIPLINAS" name="Disciplinas" icon="bookmark"/>
            <Button to="OPÇÕES" name="Quizz" icon="question"/>
            <Button to="MEMORIAL" name="Projeto Social" icon="umbrella"/>
          </View>
        </View>
        <View
        style={{
          backgroundColor: '#ffb20b'
        }}
        >
          <TrashButton name="Limpar Pontuação" icon="trash"/>
        </View>
      </View>
      <Pressable
        style={{height: '100%', width: '40%' }}
        onPress={()=>navigation.navigate("Root")}
      >
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
