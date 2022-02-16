import React, {useEffect} from "react";
import { ScrollView, StyleSheet, Text, Linking, View, Dimensions, Image, Pressable } from "react-native";
import data from "../database/data.json";
import Icon from "react-native-vector-icons/Ionicons";
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
          <Pressable style={styles.video} onPress={
            async ()=>{
              await Linking.openURL(content[a])
            }
          }>
            <View style={styles.CiclePlay}>
              <Icon size={75} color="#FEBD00" name="play-circle"/>
            </View>
            <Image
              style={{height: 200, width: _width-40 }}
              source={{uri: `https://i.ytimg.com/vi/${content[a].slice(30)}/hqdefault.jpg`}}
            />
            <View style={styles.boxVideoText}>
              <Text style={styles.videoText}><Icon size={16} color="#FEBD00" name="logo-youtube"/> Youtube</Text>
            </View>
          </Pressable>
        );
      case "List":
        return (
          content[a].map((b) => {
            return (<Text style={styles.ul}><Text style={styles.li}>    • </Text>{b}</Text>)
          })
        );
      case "Image":
        return (
          <Image
            style={{height: 100, width: _width-40 }}
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
    fontSize: 36,
    color: "#282A36",
    textTransform: "uppercase",
  },
  videoText: {
    fontSize: 16,
    color: "#FEBD00",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    textTransform: "uppercase"
  },
  TextContent: {
    padding: 20
  },
  boxVideoText: {
    position: "absolute",
    left: 20,
    bottom: 0,
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopEndRadius: 3,
    borderTopStartRadius: 3
  },
  body: {
    textAlign: "justify",
    fontSize: 15
  },
  video: {
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#333"
  },
  li: {
    fontWeight: "bold",
    fontSize: 15
  },
  ul: {
    fontSize: 15,
    margin: 2
  },
  CiclePlay: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingLeft: 5,
    width: 80,
    top: 60,
    zIndex: 20,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 100
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
