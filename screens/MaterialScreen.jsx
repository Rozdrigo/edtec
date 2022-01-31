import React, {useEffect} from "react";
import { ScrollView, StyleSheet, Text, Linking, View, Dimensions, Image, Pressable } from "react-native";
import data from "../database/data.json";
import { WebView } from 'react-native-webview';

var _width = Dimensions.get("screen").width

export default function ModalScreen({ navigation, route }) {
  const { title, subtitle, module, subModule } = route.params;
  
  useEffect(() => {
    _width = Dimensions.get("screen").width
  }, [Dimensions.get("screen").width])

  var content = data.Disciplinas[module][subModule][title];
  var RenderContent = Object.keys(content).map((a) => {
    switch (a.split(" ")[0]) {
      case "Title":
        return (
          <Text style={styles.title}>
            {content[a]}
          </Text>
        );
      case "Subtitle":
        return (
          <Text style={styles.subtitle}>
            {content[a]}
          </Text>
        );
      case "Body":
        return (
          <Text style={styles.body}>
            {content[a]}
            {"\n"}
          </Text>
        );
      case "Link":
        var ref = Object.keys(content[a])[0]
        return <Pressable style={styles.a} onPress={async () => await Linking.openURL(content[a][ref])}>
         <Text styles={styles.aText}>{ref}</Text>
        </Pressable>
      case "Video":
        return (
          <WebView
          style={{height: 200, width: _width-40}}
          originWhitelist={['*']}
          userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36 Edg/94.0.992.31"
            source = {{html: `<iframe width="100%" height="100%" src="${content[a]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}}
          />
        );
      case "List":
        return (
          content[a].map((b) => {
            return (<Text style={styles.ul}><Text style={styles.li}>    • </Text>{b}</Text>)
          })
        );
      case "Image":
        console.log(typeof(content[a]))
        return (
          <Image 
                style={{
                  width: _width - 40,
                  height: 200,
                  backgroundColor: "red"
              }}
            source={require("../database/images/material.jpg")}
          />
        );
      case "PDF":
        return (
          <></>
        );
      default:
        return;
    }
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.TextContent}>{RenderContent}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    fontSize: 15
  },
  title: {
    marginTop: 14,
    fontSize: 40,
    color: "#282A36",
    textTransform: "uppercase",
    fontFamily: ""
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5B5B5B",
    textTransform: "uppercase"
  },
  TextContent: {
    padding: 20
  },
  body: {
    textAlign: "justify",
    fontSize: 15
  },
  li: {
    fontWeight: "bold",
    fontSize: 15
  },
  ul: {
    fontSize: 15,
    margin: 2
  },
  a: {
    alignSelf: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 100,
    backgroundColor: "#008cff33",
    borderColor: "#008cff",
    borderWidth: 1,
    color: "red"
  },
  aText: {
    color: "red",
  }
});
