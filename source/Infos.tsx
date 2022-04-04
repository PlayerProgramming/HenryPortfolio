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
import { theme } from "./Mainpage";
import AwesomeButtonSocial from "react-native-really-awesome-button";
import AwesomeButton from "react-native-really-awesome-button";
import {
  felanguage,
  belanguage,
  gameDevelopment,
  mobileDevelopment,
  projectContents,
  interestContents,
  experienceContents,
} from "./data";

export function Bio({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={theme.gradientContents}
        style={styles.background}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={styles.contentsTitle}>
        <Text style={[styles.contentsTitleText, { color: theme.textContents }]}>
          Biography
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textContainerText}>
          An energetic and friendly front-end developer, exprienced in React
          Native, but willing to expand to be a Full-Stack developer.
          {"\n\n"}
          Motivated and driven for a passion to learn new languages, and always
          seeking opportunities to grow and contribute to the company's goals
          and needs.
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
          Nickname "PlayerOne", because writing codes like a game.
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <AwesomeButton onPress={() => navigation.goBack()}>
          <Text> Close me please</Text>
        </AwesomeButton>
      </View>
    </SafeAreaView>
  );
}

export function Skills({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient
        colors={theme.gradientContents}
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
            {felanguage &&
              felanguage.map((item: any) => (
                <Text style={styles.textContainerText} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>

          <View style={styles.skillsContainer}>
            <Text style={styles.skillstitle}>Back-end Languages</Text>
            {belanguage &&
              belanguage.map((item: any) => (
                <Text style={styles.textContainerText} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillstitle}>Game Development</Text>
            {gameDevelopment &&
              gameDevelopment.map((item) => (
                <Text style={styles.textContainerText} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillstitle}>Mobile Development</Text>
            {mobileDevelopment &&
              mobileDevelopment.map((item) => (
                <Text style={styles.textContainerText} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <AwesomeButton onPress={() => navigation.goBack()}>
            <Text> Close me please</Text>
          </AwesomeButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

export class Projects extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = (section: any) => {
    return (
      <View style={styles.textContainer}>
        <Text style={[styles.textContainerText, { textAlign: "center" }]}>
          {section.title}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 15 }}>
          {section.subtitle}
        </Text>
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
          colors={theme.gradientContents}
          style={styles.background}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
<<<<<<< HEAD
        <Text> Hello Project page</Text>
        <Accordion
          sections={projectContents}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
        {/* //https://github.com/HenryJKang/Night_LightV2
=======
        <View style={styles.contentsTitle}>
          <Text style={styles.contentsTitleText}> Projects</Text>
        </View>
        <View style={[styles.container]}>
          <Accordion
            sections={projectContents}
            // containerStyle={{ width: 1000 }}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            touchableComponent={TouchableOpacity}
          />
          {/* //https://github.com/HenryJKang/Night_LightV2
>>>>>>> henry
      //https://github.com/HenryJKang/Allegro */}
          <View style={{ alignItems: "center" }}>
            <AwesomeButton onPress={() => this.props.navigation.goBack()}>
              <Text> Close me please</Text>
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
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={theme.gradientContents}
          style={styles.background}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
        <View style={styles.contentsTitle}>
          <Text style={styles.contentsTitleText}>Experiences</Text>
        </View>
        <View style={styles.container}>
          <Accordion
            sections={experienceContents}
            activeSections={this.state.activeSections}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={this._updateSections}
            touchableComponent={TouchableOpacity}
          />
          <View style={{ alignItems: "center" }}>
            <AwesomeButton onPress={() => this.props.navigation.goBack()}>
              <Text> Close me please</Text>
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
          colors={theme.gradientContents}
          style={styles.background}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
        <View style={styles.contentsTitle}>
          <Text style={styles.contentsTitleText}>Interests</Text>
        </View>
        <View style={[styles.container, {}]}>
          <Accordion
            sections={interestContents}
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
              <Text> Close me please</Text>
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
    margin: 20,
    marginTop: -20,
    justifyContent: "center",
  },
  contentsTitle: {
    alignItems: "center",
  },
  contentsTitleText: {
    fontSize: 65,
    fontWeight: "bold",
  },

  textContainer: {
    borderWidth: 0.5,
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
  },
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
