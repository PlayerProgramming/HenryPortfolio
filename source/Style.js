import { StyleSheet, Platform, StatusBar } from "react-native";
import * as data from "./data";
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: "center",
  },
  maintitlefont: {
    fontFamily: data.theme.titlefont,
    color: data.fontColor,
    fontSize: Platform.OS === "web" ? "3.2vmin" : 30,
  },
  titlefont: {
    fontFamily: data.theme.titlefont,
    color: data.fontColor,
    fontSize: Platform.OS === "web" ? "4.5vmax" : 30,
  },
  subtitlefont: {
    fontFamily: data.theme.subtitlefont,
    color: data.fontColor,
    fontSize: Platform.OS === "web" ? "3.9vmin" : 32,
  },
  descfont: {
    fontFamily: data.theme.descfont,
    fontSize: Platform.OS === "web" ? "3vmin" : 20,

    color: data.fontColor,
  },
  headerContainer: {
    flex: 0.4,
    flexDirection: "row",
    margin: 10,
    borderRadius: 20,
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  headerImage: {
    width: Platform.OS === "web" ? "90%" : "100%",
    height: Platform.OS === "web" ? 150 : undefined,
    flex: 1,
    resizeMode: "contain",
  },
  headerImageContainer: {
    flex: 0.4,
  },
  bodyContainer: {
    flex: 1,
    margin: 10,
  },
  bodyList: {
    flex: 1,
    margin: 5,
    marginVertical: 30,
    width: "100%",
    height: Platform.OS === "web" ? 120 : 100,

    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 20,
  },
  bodyImage: {
    width: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    flex: 0.8,
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  footerContainer: {
    flex: 0.1,
    margin: 10,
  },
  background: {
    position: "absolute",
    height: "100%",

    flex: 1,
    left: 0,
    right: 0,
    top: 0,
  },
  //-------------------------------------------------------
  contentsTitle: {
    alignItems: "center",
    marginVertical: Platform.OS === "android" ? 10 : 10,
  },
  contentsTitleText: {
    fontSize: 60,
  },
  expandableLogo: {
    width: 20,
    height: 20,
    padding: 15,
    alignSelf: "flex-end",
    position: "absolute",
  },
  textContainer: {
    width: "100%",
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    justifyContent: "center",
  },

  textContainerText: {
    fontSize: 40,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  skillstitle: {
    marginBottom: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: "center",
  },
  skillsContainer: {
    borderWidth: 0.5,
    borderRadius: 10,
    width: "45%",
    margin: 8,
    padding: 5,
  },

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Platform.OS === "web" ? "100%" : "120%",
  },
  //----------------------------------
  footerbodyList: {
    width: "100%",
    height: 30,
    flex: 1,
    alignItems: "center",
  },
  images: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    flex: 1,
  },
});
