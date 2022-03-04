import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Linking,
  View,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import data from "../database/data.json";
import Icon from "react-native-vector-icons/Ionicons";
import Animation from "../components/Animation";

var _width = Dimensions.get("screen").width;

export default function ModalScreen({ navigation, route }) {
  const { title, subtitle, module, subModule } = route.params;
  useEffect(() => {
    _width = Dimensions.get("screen").width;
  }, [Dimensions.get("screen").width]);

  var content = data.Disciplinas[module][subModule][title];
  var RenderContent = Object.keys(content).map((a) => {
    switch (a.split(" ")[0]) {
      case "Title":
        return (
          <Text key={content[a] + Math.random()} style={styles.title}>
            {content[a]}
          </Text>
        );
      case "Subtitle":
        return (
          <Text key={content[a] + Math.random()} style={styles.subtitle}>
            {content[a]}
          </Text>
        );
      case "Body":
        return (
          <Text key={content[a] + Math.random()} style={styles.body}>
            {content[a]+ "\n"}
          </Text>
        );
      case "Link":
        var ref = Object.keys(content[a])[0];
        return (
          <Pressable
            key={content[a] + Math.random()}
            style={styles.a}
            onPress={async () => await Linking.openURL(content[a][ref])}
          >
            <Text style={styles.aText}>{ref}</Text>
          </Pressable>
        );
      case "Video":
        return (
          <Pressable
            key={content[a] + Math.random()}
            style={styles.video}
            onPress={async () => {
              await Linking.openURL(content[a]);
            }}
          >
            <View key={content[a] + Math.random()} style={styles.CiclePlay}>
              <Icon size={75} color="#FEBD00" name="play-circle" />
            </View>
            <Image
              style={{ height: 200, width: _width - 40 }}
              source={{
                uri: `https://i.ytimg.com/vi/${content[a].slice(
                  30
                )}/hqdefault.jpg`,
              }}
            />
            <View style={styles.boxVideoText}>
              <Text style={styles.videoText}>
                <Icon size={16} color="#FEBD00" name="logo-youtube" /> Youtube
              </Text>
            </View>
          </Pressable>
        );
      case "List":
        return content[a].map((b, c) => {
          return (
            <Text key={b + Math.random()} style={styles.ul}>
              <Text key={b + "b" + Math.random()} style={styles.li}> • </Text>
              {b}
              {content[a].length == c+1 ? <Text>{"\n"}</Text> : null}
            </Text>
          );
        });
      case "Image":
        return (
          <View
            style={{
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Image
              source={{ uri: content[a] }}
              style={{
                width: _width - 40,
                height: 200,
                resizeMode: "contain",
                borderRadius: 0,
                backgroundColor: "#FCFCFC",
              }}
            />
            <Text>{"\n"}</Text>
          </View>
        );
      default:
        return;
    }
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.TextContent}>
        {RenderContent[0] == undefined ? (
          <View>
            <Animation style />
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                margin: 20,
              }}
            >
              📝 Nada por aqui, ainda...
            </Text>
          </View>
        ) : (
          RenderContent
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    fontSize: 15,
  },
  title: {
    marginTop: 14,
    marginBottom: 5,
    fontSize: 36,
    color: "#282A36",
    textTransform: "uppercase",
  },
  videoText: {
    fontSize: 16,
    color: "#FEBD00",
    fontWeight: "bold",
  },
  subtitle: {
    marginBottom: 10,
    fontSize: 18,
    color: "#333",
    textTransform: "uppercase",
  },
  TextContent: {
    padding: 20,
  },
  boxVideoText: {
    position: "absolute",
    left: 20,
    bottom: 0,
    backgroundColor: "#333",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopEndRadius: 3,
    borderTopStartRadius: 3,
  },
  body: {
    textAlign: "justify",
    fontSize: 15,
    fontStyle: "italic"
  },
  video: {
    marginVertical: 10,
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  li: {
    fontWeight: "bold",
    fontSize: 16,
    fontWeight: "bold",
    color: "#FEBD00",
  },
  ul: {
    fontSize: 16,
    margin: 2,
    fontStyle: "italic"
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
    borderRadius: 100,
  },
  a: {
    alignSelf: "flex-start",
    width: _width - 40,
    alignItems: "center",
    paddingVertical: 2,
    borderRadius: 100,
    borderColor: "#FEBD00",
    borderWidth: 2,
    marginVertical: 10,
  },
  aText: {
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#FEBD00",
  },
});
