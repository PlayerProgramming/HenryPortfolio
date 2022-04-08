import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Linking,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Contactinfo from "./Contactinfo";
import * as data from "./data";
import Loading from "./Loading";
import { useNavigation } from "@react-navigation/native";
import styles from "./Style";
import {
  useFonts,
  Teko_400Regular,
  Teko_700Bold,
  Teko_300Light,
} from "@expo-google-fonts/teko";
import { Mukta_200ExtraLight } from "@expo-google-fonts/mukta";
export default function Mainpage() {
  const navigation = useNavigation();
  let [fontsLoaded] = useFonts({
    Teko_700Bold,
    Teko_400Regular,
    Teko_300Light,
    Mukta_200ExtraLight,
  });
  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <SafeAreaView style={[styles.AndroidSafeArea, { flex: 1 }]}>
        <LinearGradient
          colors={data.theme.gradient}
          style={styles.background}
        />
        <View style={styles.headerContainer}>
          <View style={styles.headerImageContainer}>
            <TouchableWithoutFeedback
              onPress={() =>
                Linking.openURL(
                  "https://www.youtube.com/watch?v=hwZNL7QVJjE&ab_channel=SoulfulSounds"
                )
              }
            >
              <Image
                style={styles.headerImage as any}
                source={require("../assets/etgcharacter1.png")}
              />
            </TouchableWithoutFeedback>
          </View>
          <Text style={[styles.maintitlefont, {}]}>
            Hi, {"\n"}I'm Henry, {"\n"}the Fun Developer.{" "}
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
            data={data.info}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.bodyList}
                onPress={() => navigation.navigate(item.id)}
              >
                <Image source={item.image} style={styles.bodyImage as any} />
                <Text style={[{ fontSize: 16 }, styles.descfont]}>
                  {item.title}
                </Text>
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
}
