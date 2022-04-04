import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React, { Component } from "react";
import Accordion from "react-native-collapsible/Accordion";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "./Mainpage";

const felanguage: Array<any> = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "TypeScript",
  },
  {
    name: "React",
  },
  {
    name: "React Native",
  },
];
const belanguage: Array<any> = [
  {
    name: "Java",
  },
  {
    name: "JavaScript",
  },
  {
    name: "C++",
  },
  {
    name: "Oracle SQL",
  },
  {
    name: "Firebase",
  },
  {
    name: "TypeScript",
  },
];
const gameDevelopment: Array<any> = [
  {
    name: "Unreal Engine",
  },
  {
    name: "Unity",
  },
];
const mobileDevelopment: Array<any> = [
  {
    name: "Java",
  },
  {
    name: "Android Studio",
  },
];

const projectContents = [
  {
    title: "NightLight \n [ 1st place, Safety Category in BCIT Contest]",
    content:
      "- Collaborated with 3 classmates to develop an android app which displays " +
      "the brightest path based on the amount of lamps on the streets using Java on " +
      "Android Studio, Google Map API, Vancouver Open Data API \n" +
      "- Designed visual mock-ups/prototypes from wire-frames and" +
      "delivered final design production-ready assets for development \n" +
      "- Implemented a function which sends a preset" +
      "google map route of the user to contacts in emergency situations",
  },
  {
    title: "Allegro \n [ 1st place, Creativity Category in BCIT Contest ]",
    content:
      "Applied Agile in a group of 4, developed and delivered a game " +
      "web application using JavaScript, Firebase,and MongoDB to host the web " +
      "Responsible for designing user pages, implementing a front-end" +
      "Organize and led the team to confirm if the progresses are completed in a sufficient time",
  },
  {
    title: "Randon Number Generator\n [ Toy Project ]",
    content: "Lorem ipsum...",
  },
];

const interestContents = [
  {
    title: "Games",
    image: "",
    content:
      "The games I had fun and played :\nLeague of Legends, Enter the Gungeon, Fortnite, Rainbow Six Siege,  ",
  },
  {
    title: "Sports",
    image: "",
    content:
      "I really love swimming the most and basketball. I currently do workout at least 5 days a week.",
  },
  {
    title: "Typing",
    image: "",
    content: "The highest wpm I typed was 172 wpm on Monkeytype.com",
  },
];
export function Bio({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={theme.gradientContents}
        style={styles.background}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <View style={styles.textContainer}>
        <Text style={[{ marginBottom: 50 }]}>
          <Text></Text>An energetic and friendly front-end developer, exprienced
          in React Native, but willing to expand to be a Full-Stack developer.
          {"\n\n"}
          Motivated and driven for a passion to learn new languages, and always
          seeking opportunities to grow and contribute to the company's goals
          and needs.
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text>
          <Image
            style={{ width: 35, height: 35 }}
            source={require("../assets/etgcharacter1.png")}
          />
          Nickname "PlayerOne", because writing codes like a game.
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.buttonClose}> Close me please</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export function Skills({ navigation }) {
  return (
    <SafeAreaView style={[styles.container]}>
      <LinearGradient
        colors={theme.gradientContents}
        style={styles.background}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={styles.skillstitle}>Front-end Languages</Text>
          {felanguage &&
            felanguage.map((item: any) => (
              <Text key={item.name}>{item.name}</Text>
            ))}
        </View>

        <View>
          <Text style={styles.skillstitle}>Back-end Languages</Text>
          {belanguage &&
            belanguage.map((item: any) => (
              <Text key={item.name}>{item.name}</Text>
            ))}
        </View>
        <View>
          <Text style={styles.skillstitle}>Game Development ( as hobby )</Text>
          {gameDevelopment &&
            gameDevelopment.map((item) => (
              <Text key={item.name}>{item.name}</Text>
            ))}
        </View>
        <View>
          <Text style={styles.skillstitle}>Mobile Development</Text>
          {mobileDevelopment &&
            mobileDevelopment.map((item) => (
              <Text key={item.name}>{item.name}</Text>
            ))}
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.buttonClose}> Close me please</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export class Projects extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = (section: any) => {
    return (
      <View>
        <Text>{section.title}</Text>
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
      <SafeAreaView style={[styles.container, {}]}>
        <LinearGradient
          colors={theme.gradientContents}
          style={styles.background}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
        <Text> Hello Project page</Text>
        <Accordion
          sections={projectContents}
          activeSections={this.state.activeSections}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
        {/* //https://github.com/HenryJKang/Night_LightV2
      //https://github.com/HenryJKang/Allegro */}
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.buttonClose}> Close me please</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export function Experiences({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={theme.gradientContents}
        style={styles.background}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
      />
      <View>
        <Text>Elite Education</Text>
        <Text>2020 May ~ 2020 August</Text>
        <Text>
          Tutoring JavaScript and Java for students, ages 8 - 15 {"\n"}
        </Text>
      </View>
      <View>
        <Text>British Columbia Institute of Technology</Text>
        <Text>2018 Spetember ~ 2020 June</Text>
        <Text>
          Achieved Diploma in Computer System Technology{"\n"}Learned Object
          Oriented Programming, Algorithms, Web Development, Leaderships {"\n"}
        </Text>
        <View>
          <Text>Canadian Mental Health Association, Volunteer</Text>
          <Text>2016 Spetember ~ 2017 Feburary</Text>
          <Text>
            Enhanced the scheduling of the facility. {"\n"}Strengthened the
            knowledge of the mental illness and the symptoms of it. {"\n"}
            Pursued communicating and interacting with people who have mental
            illnesses. {"\n"}
          </Text>
        </View>
        <View>
          <Text>Swift Current Aquatic Centre, Swim Instructor</Text>
          <Text>2016 November ~ 2017 January</Text>
          <Text>
            Prepared various swim courses and routiens efficiently for youth.
            {"\n"}Directed the students to ensure the safety and rules.
            {"\n"}Informed the progresses of the students to their guardians.
            {"\n"}
          </Text>
        </View>
      </View>
      <View>
        <Text>Saskatchewan Comprehensive Highschool</Text>
        <Text>2014 Spetember ~ 2018 June</Text>
        <Text>Located in Swift Current, Saskatchewan {"\n"}</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.buttonClose}> Close me please</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
export class Interests extends Component {
  state = {
    activeSections: [],
  };

  _renderHeader = (section: any) => {
    return (
      <View>
        <Text>{section.title}</Text>
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
      <SafeAreaView style={[styles.container, {}]}>
        <LinearGradient
          colors={theme.gradientContents}
          style={styles.background}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
        />
        <Text> Hello Project page</Text>
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
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Text style={styles.buttonClose}> Close me please</Text>
        </TouchableOpacity>
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
    backgroundColor: "grey",
    justifyContent: "center",
  },

  textContainer: {
    borderWidth: 0.5,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  skillstitle: {
    marginBottom: 20,
    marginVertical: 20,
  },
  background: {
    position: "absolute",
    flex: 1,
    left: 0,
    right: 0,
    top: 0,
    margin: -20,
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
});
