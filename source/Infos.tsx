import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
} from "react-native";
import React, { Component } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import { useNavigation } from "@react-navigation/native";
import AwesomeButtonSocial from "react-native-really-awesome-button";
import AwesomeButton from "react-native-really-awesome-button";
import * as data from "./data";
function exitButton({ navigation }) {
  return (
    <View style={{ alignItems: "center" }}>
      <AwesomeButton onPress={() => navigation.goBack()}>
        <Text> {data.exitButtonText}</Text>
      </AwesomeButton>
    </View>
  );
}
export function Bio({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={data.theme.gradientContents}
        style={styles.background}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={styles.contentsTitle}>
        <Text
          style={[styles.contentsTitleText, { color: data.theme.textContents }]}
        >
          Biography
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.textContainerText}>
            {data.bioContents.content}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>TMI</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[{ margin: 10, fontSize: 20 }]}>
            <Image
              style={{ width: 35, height: 35 }}
              source={require("../assets/etgcharacter1.png")}
            />
            {data.bioContents.tmi}
          </Text>
        </View>
        {exitButton({ navigation })}
      </View>
    </SafeAreaView>
  );
}

export function Skills({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={data.theme.gradientContents}
        style={styles.background}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={styles.contentsTitle}>
        <Text style={styles.contentsTitleText}>Skills</Text>
      </View>
      <View style={[styles.container]}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <View style={styles.skillsContainer}>
            <Text style={styles.skillstitle}>Front-end Languages</Text>
            {data.felanguage &&
              data.felanguage.map((item: any) => (
                <Text style={styles.textContainerText} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>

          <View style={styles.skillsContainer}>
            <Text style={styles.skillstitle}>Back-end Languages</Text>
            {data.belanguage &&
              data.belanguage.map((item: any) => (
                <Text style={styles.textContainerText} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillstitle}>Game Development</Text>
            {data.gameDevelopment &&
              data.gameDevelopment.map((item) => (
                <Text style={styles.textContainerText} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillstitle}>Mobile Development</Text>
            {data.mobileDevelopment &&
              data.mobileDevelopment.map((item) => (
                <Text style={styles.textContainerText} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>
        </View>

        {exitButton({ navigation })}
      </View>
    </SafeAreaView>
  );
}

export class Projects extends Component {
  state = {
    activeSections: [],
  };

  Navi = () => {
    exitButton(this.props.navigation);
  };
  _renderHeader = (section: any) => {
    return (
      <View style={styles.textContainer}>
        <Image
          style={styles.expandableLogo}
          source={require("../assets/plus.png")}
        />
        <View>
          <Text style={[styles.textContainerText, { alignSelf: "center" }]}>
            {section.title}
          </Text>
        </View>
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          {section.subtitle}
        </Text>
        <View style={{ alignItems: "flex-end" }}></View>
      </View>
    );
  };

  _renderContent = (section: any) => {
    return (
      <View>
        <Text>{section.content}</Text>
        <View style={{ alignItems: "center", margin: 10 }}>
          <AwesomeButtonSocial
            backgroundColor="#333"
            borderColor="#f5f5f5"
            paddingBottom={5}
            raiseLevel={4}
            height={35}
            onPress={() => Linking.openURL(section.checkout)}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/github.png")}
            />
            <Text>Check Out!</Text>
          </AwesomeButtonSocial>
        </View>
      </View>
    );
  };

  _updateSections = (activeSections: any) => {
    this.setState({ activeSections });
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={data.theme.gradientContents}
          style={styles.background}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
        <View style={styles.contentsTitle}>
          <Text style={styles.contentsTitleText}> Projects</Text>
        </View>
        <View style={[styles.container]}>
          <Accordion
            sections={data.projectContents}
            // containerStyle={{ width: 1000 }}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            touchableComponent={TouchableOpacity}
          />
          {/* //https://github.com/HenryJKang/Night_LightV2
      //https://github.com/HenryJKang/Allegro */}
          <View style={{ alignItems: "center" }}>
            <AwesomeButton onPress={() => this.props.navigation.goBack()}>
              <Text> {data.exitButtonText}</Text>
            </AwesomeButton>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export class Experiences extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = (section: any) => {
    return (
      <View style={styles.textContainer}>
        <Image
          style={styles.expandableLogo}
          source={require("../assets/plus.png")}
        />
        <Text style={[{ fontSize: 16, fontWeight: "bold" }]}>
          {section.name}
        </Text>
        <Text>{section.date}</Text>
      </View>
    );
  };

  _renderContent = (section: any) => {
    return (
      <View>
        <Text>{section.details}</Text>
      </View>
    );
  };

  _updateSections = (activeSections: any) => {
    this.setState({ activeSections });
  };

  awesomebutton = () => {
    return <AwesomeButton backgroundColor="#feac5e" />;
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={data.theme.gradientContents}
          style={styles.background}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
        <View style={styles.contentsTitle}>
          <Text style={styles.contentsTitleText}>Experiences</Text>
        </View>
        <View style={styles.container}>
          <Accordion
            sections={data.experienceContents}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            touchableComponent={TouchableOpacity}
          />
          <View style={{ alignItems: "center" }}>
            <AwesomeButton onPress={() => this.props.navigation.goBack()}>
              <Text> {data.exitButtonText}</Text>
            </AwesomeButton>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
export class Interests extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = (section: any) => {
    return (
      <View style={styles.textContainer}>
        <Image
          style={styles.expandableLogo}
          source={require("../assets/plus.png")}
        />
        <Text
          style={[{ fontSize: 40, fontWeight: "bold", textAlign: "center" }]}
        >
          {section.title}
        </Text>
      </View>
    );
  };

  _renderContent = (section: any) => {
    return (
      <View>
        <Text>{section.content}</Text>
      </View>
    );
  };
  _updateSections = (activeSections: any) => {
    this.setState({ activeSections });
  };
  render() {
    return (
      <SafeAreaView style={[{ flex: 1 }]}>
        <LinearGradient
          colors={data.theme.gradientContents}
          style={styles.background}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
        <View style={styles.contentsTitle}>
          <Text style={styles.contentsTitleText}>Interests</Text>
        </View>
        <View style={[styles.container, {}]}>
          <Accordion
            sections={data.interestContents}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            touchableComponent={TouchableOpacity}
          />
          {/* //https://github.com/HenryJKang/Night_LightV2
      //https://github.com/HenryJKang/Allegro */}
          <View style={{ alignItems: "center" }}>
            <AwesomeButton onPress={() => this.props.navigation.goBack()}>
              <Text> {data.exitButtonText}</Text>
            </AwesomeButton>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    margin: 15,
    marginTop: 10,
    justifyContent: "center",
  },
  contentsTitle: {
    alignItems: "center",
  },
  contentsTitleText: {
    fontSize: 60,
    fontWeight: "bold",
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
  // textContainer: {
  //   borderWidth: 0.5,
  //   marginVertical: 10,
  //   borderRadius: 10,
  //   padding: 10,
  // },
  textContainerText: {
    fontSize: 20,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  skillstitle: {
    marginBottom: 20,
    fontSize: 20,
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
