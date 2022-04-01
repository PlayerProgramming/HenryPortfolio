import React, { Component, useState } from "react";
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
  Platform,
} from "react-native";

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
    id: "Bio",
    title: "Bio",
  },
  {
    id: "Programming",
    title: "Languages",
  },
  {
    id: "Project",
    title: "Projects",
  },
  {
    id: "Button4",
    title: "Button4",
  },
  {
    id: "Button5",
    title: "Button5",
  },
  {
    id: "Button6",
    title: "Button6",
  },
  // {
  //   id: "Button7",
  //   title: "Button7",
  // },
  // {
  //   id: "Button8",
  //   title: "Button8",
  // },
];

export default function Mainpage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [cn, setcn] = useState();

  return (
    <SafeAreaView
      style={[styles.AndroidSafeArea, { flex: 1, backgroundColor: "#D1E1D9" }]}
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
          flex: 1,
          backgroundColor: "#4B4B4B",
          margin: 10,
          borderRadius: 50,
        }}
      >
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
          data={info}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flex: 1,
                margin: 10,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate(item.id)}
              // onPress={() => Alert.alert(item.title)}
            >
              <Image
                source={require("../assets/header_logo.jpg")}
                style={{ width: 100, height: 100, borderRadius: 2000 }}
              />
              <Text>{item.title}</Text>
            </TouchableOpacity>
          )}
          numColumns={3}
          horizontal={false}
          keyExtractor={(item) => item.id}
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
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});
