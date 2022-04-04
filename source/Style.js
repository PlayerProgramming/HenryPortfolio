import { StyleSheet, Platform, StatusBar } from "react-native";
import * as data from "./data";
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
    justifyContent: "center",
  },
  titlefont: {
    fontFamily: data.theme.titlefont,
    color: data.fontColor,
  },
  subtitlefont: {
    fontFamily: data.theme.subtitlefont,
    color: data.fontColor,
  },
  descfont: {
    fontFamily: data.theme.descfont,
    fontSize: 26,
    color: data.fontColor,
  },
  headerContainer: {
    flex: 0.4,
    flexDirection: "row",
    margin: 10,
    borderRadius: 20,
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerImage: {
    width: Platform.OS === "web" ? "80%" : "100%",
    height: Platform.OS === "web" ? 200 : undefined,
    flex: 1,
    resizeMode: "contain",
    margin: 10,
    borderRadius: 12,
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
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 20,
  },
  bodyImage: {
    width: undefined,
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    flex: 1,
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
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    // height: Platform.OS === "android" ? "120%" : "100%",
    ...Platform.select({
      ios: {
        height: 1000,
      },
      android: {
        height: 1400,
      },
      default: {
        height: "100%",
      },
    }),
  },
  //-------------------------------------------------------
  contentsTitle: {
    alignItems: "center",
    marginVertical: Platform.OS === "android" ? 60 : 10,
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
    fontSize: 24,
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
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    margin: -20,
    ...Platform.select({
      ios: {
        height: 1000,
      },
      android: {
        height: 1400,
      },
      default: {
        height: "100%",
      },
    }),
  },
});
