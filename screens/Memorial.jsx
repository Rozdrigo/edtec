import React, { useEffect } from "react";
import { Text, Image, Dimensions } from "react-native";
import { ScrollView } from "react-native";

var _width = Dimensions.get("screen").width;

export default function Memorial(){

    useEffect(() => {
        _width = Dimensions.get("screen").width;
      }, [Dimensions.get("screen").width]);

    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
                backgroundColor: "#FFF"
            }}
        >
            <Image source={require("../assets/page_images/We.png")}
            style={{
                marginTop: 10,
                width: _width,
                height: _width * 0.7658827658827659
            }}
            />
            <Text
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: 20,
                }}
            >📝 Edificações (2019 - 2021)</Text>
            <Text
                style={{
                    textAlign: "center",
                    margin: 20,
                }}
            >
                Alessy Kauã Araújo Lemos {"\n"}
                Alex Fagner Nogueira de Oliveira {"\n"}
                Ana Beatriz Barbosa Almeida {"\n"}
                Antonio Victor Prudêncio da Silva {"\n"}
                Augusto César Barcelos de Vasconcelos {"\n"}
                Brian dos Santos Gomes {"\n"}
                Carlos Daniel Dias Castro {"\n"}
                Carlos Kauan da Silva Gomes {"\n"}
                Gabriel da Silva Souza {"\n"}
                Guilherme Victor Alves Costa {"\n"}
                Iago de Abreu Lemos {"\n"}
                Ítala Torres de Castro {"\n"}
                Jaysa Letícia Mesquita e Silva {"\n"}
                João Marcos Moraes Rodrigues {"\n"}
                João Victor Sampaio da Silva {"\n"}
                Julia Rocha Rego {"\n"}
                Kailane Leite da Silva {"\n"}
                Kamilly Vitória Lima Pinheiro {"\n"}
                Karolayne Cruz Marreiro {"\n"}
                Letycia Alves Maciel da Silva {"\n"}
                Letícia Silva Medeiros {"\n"}
                Lívia Larissa Nunes dos Anjos {"\n"}
                Livia Rayna Teixeira Souza {"\n"}
                Lorrane Cristina Marques Vieira Nobre {"\n"}
                Maria Eduarda Castro Queiroz {"\n"}
                Maria Eduarda de Souza Saraiva {"\n"}
                Mariana Silva Severo Holanda Martins {"\n"}
                Monick Ellen da Silva Feitosa {"\n"}
                Natan Farias da Silva {"\n"}
                Priscilla Oliveira Costa Nascimento {"\n"}
                Rodrigo Silva Coelho {"\n"}
                Sérgio Vinicius Isaías Barbosa {"\n"}
                Thiala Kessia Souza Silva {"\n"}
                Vera Aline de Sousa Martins {"\n"}
                Victor Gabriel de Carvalho Pascoal {"\n"}
                Victor Hugo Nogueira Amâncio {"\n"}
                Victorio Pereira Lemos {"\n"}
                Vinicius Rocha Câmara {"\n"}
                Vitorio Augusto Queiroz Brito {"\n"}
                William Vinicius Benicio da Silva {"\n"}
                Yohana Souza dos Santos {"\n"}
            </Text>
        </ScrollView>
    )
}