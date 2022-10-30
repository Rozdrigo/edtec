import { useState } from 'react';
import { Pressable, StatusBar, StyleSheet, Image } from 'react-native';
import { View, Text } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Tutorial({ navigation }) {

    const tutorial = [
      {
        image: require('../assets/page_images/Tec01.png'),
        description: "Olá! Bem vindo(a) ao EDTEC. Aqui te ajudaremos a ficar por dentro de conteúdos relacionados ao curso Técnico em Edificações."
      },
      {
        image: require('../assets/page_images/Tec02.png'),
        description: "No menu lateral você pode ter acesso à todas as funções que disponibilizamos e ainda, participar de jogos como nosso Quiz. E tudo isso Off-line!"
      },
      {
        image: require('../assets/page_images/Tec03.png'),
        description: "Você pode acompanhar oque está acontecendo no mundo da Construção Civil e ficar atualizado de tudo."
      },
      {
        image: require('../assets/page_images/Tec04.png'),
        description: "Adquirimos e repassamos para você relatos de alunos egressos do curso Técnico em Edificações em sua jornada acadêmica."
      },
      {
        image: require('../assets/page_images/Tec05.png'),
        description: "Você pode acessar os conteúdos das disciplinas técnicas, conhecendo ainda mais o curso."
      }
    ]
    const [count, setCount ] = useState(1);
    const [ aut, setAut ] = useState(tutorial[0]);

    return(
        <Pressable
            style={styles.container}
            onPress={() => {
              if(count == tutorial.length){
                async () => await AsyncStorage.setItem("tutorial", "true");
                navigation.navigate("Root");
              }else{
                setAut(tutorial[count]);
                setCount(count+1);
              }
            }}
        >
            <StatusBar backgroundColor="#684D00" animated barStyle="light-content"/>
            <Image style={{
              position: 'absolute',
              bottom: '23%'
            }} source={aut.image}></Image>
            <View
                style={{
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: "25%",
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        fontSize: 20,
                        textAlign: 'center',
                        padding: 20
                    }}
                >{aut.description}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000097',
    justifyContent: 'flex-end'
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
