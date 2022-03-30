import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  Modal,
} from "react-native";
import React from "react";

const Layout: any = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};
const Colors: any = {
  theme: "#24685b",
  white: "#fff",
  greyish: "#a4a4a4",
};
export default function Mainpage(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,

          //   alignContent: "center",
          //   justifyContent: "center",
        }}
      >
        <View
          style={{
            flex: 0.5,
            backgroundColor: "#808080",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={styles.header}
            source={require("../assets/header_logo.jpg")}
          />
          <Text>Henry Juhyeong Kang</Text>
          <Text>Programming Name: PlayerOne</Text>
          <Text>React Native Developer</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#4B4B4B" }}>
          <Text>1111111111</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: "#c6c6c6" }}>
          <Text>22222222</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: "row",
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    width: "50%",
    height: "50%",
  },
});

{
  /* <StatusBar
  barStyle="dark-content"
  hidden={false}
  backgroundColor="#00BCD4"
  translucent={true}
/>; */
}
