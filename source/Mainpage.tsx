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
  Linking,
} from "react-native";
import Contactinfo from "./Contactinfo";
const Layout: any = {
  height: Dimensions.get("window").height,
  width: Dimensions.get("window").width,
};

const info: Array<any> = [
  {
    id: "Bio",
    title: "Bio",
    image: require("../assets/Bio.png"),
  },
  {
    id: "Skills",
    title: "Skills",
    image: require("../assets/Skills.png"),
  },
  {
    id: "Projects",
    title: "Projects",
    image: require("../assets/Projects.png"),
  },
  {
    id: "Experiences",
    title: "Experiences",
    image: require("../assets/Experiences.png"),
  },
  {
    id: "Interests",
    title: "Interests",
    image: require("../assets/Interests.png"),
  },
];

export default function Mainpage({ navigation }) {
  return (
    <SafeAreaView
      style={[styles.AndroidSafeArea, { flex: 1, backgroundColor: "#D1E1D9" }]}
    >
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImage}
          source={require("../assets/header_logo.jpg")}
        />
        <Text>
          Hi, {"\n\n"}I'm Henry, {"\n\n"}the Fun Developer.{" "}
        </Text>
      </View>

      <View style={styles.bodyContainer}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
          }}
          data={info}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.bodyList}
              onPress={() => navigation.navigate(item.id)}
            >
              <Image
                source={item.image}
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
      <View style={styles.footerContainer}>
        <Contactinfo />
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
  headerContainer: {
    flex: 0.3,
    flexDirection: "row",
    margin: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: "40%",
    height: "80%",
    borderRadius: 1000,
    margin: 10,
  },
  bodyContainer: {
    flex: 1,
    backgroundColor: "#4B4B4B",
    margin: 10,
    borderRadius: 50,
  },
  bodyList: {
    flex: 1,
    margin: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
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
  footerContainer: {
    flex: 0.15,
    backgroundColor: "#c6c6c6",
    margin: 10,
    borderRadius: 50,
  },
});
