import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  ScrollView,
} from "react-native";
import React, { Component } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import AwesomeButtonSocial from "react-native-really-awesome-button";
import AwesomeButton from "react-native-really-awesome-button";
import * as data from "./data";
import styles from "./Style";
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
        <Text style={[styles.titlefont, { fontSize: 60 }]}>Biography</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.descfont, { fontSize: 28 }]}>
            {data.bioContents.content}
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <Text>TMI</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.descfont, { margin: 10, fontSize: 20 }]}>
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
        <Text style={[styles.titlefont, { fontSize: 60 }]}>Skills</Text>
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
            <Text style={[styles.subtitlefont, styles.skillstitle]}>
              Front-end Languages
            </Text>
            {data.felanguage &&
              data.felanguage.map((item: any) => (
                <Text style={styles.descfont} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>

          <View style={styles.skillsContainer}>
            <Text style={[styles.subtitlefont, styles.skillstitle]}>
              Back-end Languages
            </Text>
            {data.belanguage &&
              data.belanguage.map((item: any) => (
                <Text style={styles.descfont} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>
          <View style={styles.skillsContainer}>
            <Text style={[styles.subtitlefont, styles.skillstitle]}>
              Game Development
            </Text>
            {data.gameDevelopment &&
              data.gameDevelopment.map((item) => (
                <Text style={styles.descfont} key={item.name}>
                  {item.name}
                </Text>
              ))}
          </View>
          <View style={styles.skillsContainer}>
            <Text style={[styles.subtitlefont, styles.skillstitle]}>
              Mobile Development
            </Text>
            {data.mobileDevelopment &&
              data.mobileDevelopment.map((item) => (
                <Text style={styles.descfont} key={item.name}>
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

  _renderHeader = (section: any) => {
    return (
      <View style={styles.textContainer}>
        <Image
          style={styles.expandableLogo}
          source={require("../assets/plus.png")}
        />
        <Text
          style={[styles.subtitlefont, { alignSelf: "center", fontSize: 32 }]}
        >
          {section.title}
        </Text>
        <Text
          style={[styles.subtitlefont, { textAlign: "center", fontSize: 18 }]}
        >
          {section.subtitle}
        </Text>
      </View>
    );
  };

  _renderContent = (section: any) => {
    return (
      <View>
        <Text style={styles.descfont}>{section.content}</Text>
        <View style={{ alignItems: "center", margin: 10 }}>
          <AwesomeButtonSocial
            backgroundColor="#333"
            borderColor="#f5f5f5"
            paddingBottom={0}
            raiseLevel={4}
            height={30}
            stretch={true}
            onPress={() => Linking.openURL(section.checkout)}
          >
            <Image
              style={{ width: 25, height: 25 }}
              source={require("../assets/github.png")}
            />
            <Text style={styles.subtitlefont}>Check Out!</Text>
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
      <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
        <LinearGradient
          colors={data.theme.gradientContents}
          style={styles.background}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
        <ScrollView>
          <View style={styles.contentsTitle}>
            <Text style={[styles.titlefont, { fontSize: 60 }]}> Projects</Text>
          </View>
          <View style={[styles.container]}>
            <Accordion
              sections={data.projectContents}
              activeSections={this.state.activeSections}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              onChange={this._updateSections}
              touchableComponent={TouchableOpacity}
              // expandMultiple={true}
            />
            <View style={{ alignItems: "center" }}>
              <AwesomeButton onPress={() => this.props.navigation.goBack()}>
                <Text> {data.exitButtonText}</Text>
              </AwesomeButton>
            </View>
          </View>
        </ScrollView>
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
        <Text style={[{ fontSize: 20 }, styles.subtitlefont]}>
          {section.name}
        </Text>
        <Text style={[{ fontSize: 18 }, styles.descfont]}>{section.date}</Text>
      </View>
    );
  };

  _renderContent = (section: any) => {
    return (
      <View>
        <Text style={styles.descfont}>{section.details}</Text>
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
        <ScrollView>
          <View style={styles.contentsTitle}>
            <Text style={[styles.titlefont, { fontSize: 60 }]}>
              Experiences
            </Text>
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
        </ScrollView>
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
          style={[styles.subtitlefont, { fontSize: 60, textAlign: "center" }]}
        >
          {section.title}
        </Text>
      </View>
    );
  };

  _renderContent = (section: any) => {
    return (
      <View>
        <Text style={styles.descfont}>{section.content}</Text>
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
          <Text style={[styles.titlefont, { fontSize: 60 }]}>Interests</Text>
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
