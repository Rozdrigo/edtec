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
  var memorizade = "";
  var content = data.Disciplinas[module][subModule][title];
  var RenderContent = Object.keys(content).map((a) => {
    switch (a.split(" ")[0]) {
      case "Title":
        return (
          <Text key={content[a] + Math.random()} style={styles.title}>
            {content[a].trim()}
          </Text>
        );
      case "Subtitle":
        return (
          <Text key={content[a] + Math.random()} style={styles.subtitle}>
            {content[a].trim()}
          </Text>
        );
      case "Body":
        return (
          <Text key={content[a] + Math.random()} style={styles.body}>
            {content[a]}
          </Text>
        );
      case "Link":
        function avaliable() {
          colorized = colors[Math.floor(Math.random()*colors.length)];
          colorized == memorizade ? avaliable() : memorizade = colorized;
        };
        var ref = Object.keys(content[a])[0];
        const colors = ["#FD5800", "#009549", "#6D6ADB", "#9400D3", "#1E90FF"];
        var colorized = "";
        avaliable();
        return (
          <Pressable
            key={content[a] + Math.random()}
            style={{
              alignSelf: "flex-start",
              width: _width - 40,
              alignItems: "center",
              paddingVertical: 2,
              borderRadius: 100,
              borderColor: colorized,
              backgroundColor: colorized,
              borderWidth: 2,
              marginVertical: 10,
            }}
            onPress={async () => await Linking.openURL(content[a][ref])}
          >
            <Text
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "#FFF",
              }}
            >
              {ref.trim()}
            </Text>
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
              <Text key={b + "b" + Math.random()} style={styles.li}>
                {" "}
                •{" "}
              </Text>
              {b.trim()}
            </Text>
          );
        });
      case "NumListPic":
        var count = 0;
        return content[a].map((b, c) => {
          var _heigth = 200;
          return (
            <View key={c+"A"}>
              {b.search("data:") != -1 && b.search(";base64,") != -1 ? (
                <View
                  style={{
                    overflow: "hidden",
                    marginVertical: 10,
                  }}
                >
                  <Pressable
                    onLongPress={() => {
                      navigation.navigate("IMAGEM", { image: b });
                    }}
                  >
                    <Image
                      source={{ uri: b }}
                      style={{
                        width: _width - 40,
                        height: _heigth,
                        resizeMode: "contain",
                      }}
                    />
                  </Pressable>
                </View>
              ) : (
                <Text key={b + Math.random()} style={styles.ul}>
                  <Text key={b + "b" + Math.random()} style={styles.li}>
                    {(count += 1)}.{" "}
                  </Text>
                  {b}
                </Text>
              )}
            </View>
          );
        });
      case "Image":
        return (
          <View
            key={Math.random() + Math.random()}
            style={{
              overflow: "hidden",
              marginVertical: 10,
            }}
          >
            <Pressable
              onLongPress={() => {
                navigation.navigate("IMAGEM", { image: content[a] });
              }}
            >
              <Image
                source={{ uri: content[a] }}
                style={{
                  width: _width - 40,
                  height: 200,
                  resizeMode: "contain",
                }}
              />
            </Pressable>
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
    marginVertical: 10,
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
    marginVertical: 10,
    textAlign: "justify",
    fontSize: 15,
    fontStyle: "italic",
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
    marginVertical: 2,
    fontStyle: "italic",
    textAlign: "justify",
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
