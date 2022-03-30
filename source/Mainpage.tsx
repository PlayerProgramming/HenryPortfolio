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
  TouchableOpacity,
  FlatList,
  Alert,
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

const info: Array<any> = [
  {
    id: "bio",
    title: "Bio",
  },
  {
    id: "programming",
    title: "Languages",
  },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "Button4",
    title: "Button4",
  },
];
export default function Mainpage(props) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D1E1D9" }}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View
          style={{
            flex: 0.3,
            flexDirection: "row",
            margin: 10,
            borderRadius: 50,
            backgroundColor: "#808080",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={styles.header}
            source={require("../assets/header_logo.jpg")}
          />
          <Text>
            Henry Juhyeong Kang {"\n"}Programming Name: PlayerOne{"\n"}React
            Native Developer
          </Text>
        </View>
        <View
          style={{
            flex: 0.8,
            backgroundColor: "#4B4B4B",
            margin: 10,
            borderRadius: 50,
          }}
        >
          <FlatList
            data={info}
            numColumns={2}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  flex: 1,
                  margin: 30,
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => Alert.alert("Hi")}
              >
                <Image
                  source={require("../assets/header_logo.jpg")}
                  style={{ width: "100%", height: "100%", borderRadius: 25 }}
                />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View
          style={{
            flex: 0.15,
            backgroundColor: "#c6c6c6",
            margin: 10,
            borderRadius: 50,
          }}
        >
          <Text>Contact Information</Text>
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
    width: "20%",
    height: "50%",
    borderRadius: 1000,
    margin: 10,
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
{
  /* <Text style={{ margin: 20 }}>
            Hello, my name is Henry Juhyeong kang {"\n"}I graduated BCIT in
            2020.
            {"\n"}
          </Text> */
}
{
  /* <TouchableOpacity style={{ flex: 0.5, margin: 20, borderRadius: 25 }}>
  <Image
    source={require("../assets/header_logo.jpg")}
    style={{ width: "100%", height: "100%", borderRadius: 25 }}
  />
</TouchableOpacity>; */
}
