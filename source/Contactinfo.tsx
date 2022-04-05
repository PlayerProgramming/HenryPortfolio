import { FlatList, Image, TouchableOpacity, Linking } from "react-native";
import React from "react";
import * as Clipboard from "expo-clipboard";
import styles from "./Style";
const contactinfo: Array<any> = [
  {
    id: "github",
    title: "Github",
    image: require("../assets/github.png"),
  },
  {
    id: "gmail",
    title: "Gmail",
    image: require("../assets/gmail.png"),
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    image: require("../assets/linkedin.png"),
  },
];
export default function Contactinfo() {
  return (
    <FlatList
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
      }}
      numColumns={3}
      scrollEnabled={false}
      data={contactinfo}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.footerbodyList}
          onPress={() => imageClick(item.id)}
        >
          <Image source={item.image} style={styles.images} />
        </TouchableOpacity>
      )}
    ></FlatList>
  );
}
function imageClick(image: any) {
  switch (image) {
    case "github":
      return Linking.openURL("https://github.com/PlayerProgramming");
    case "gmail":
      return Clipboard.setString("henrykang720@gmail.com");
    case "linkedin":
      return Linking.openURL(
        "https://www.linkedin.com/in/henry-juhyeong-kang/"
      );
  }
}
