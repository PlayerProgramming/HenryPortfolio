import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mainpage from "./Mainpage";
import * as Infos from "./Infos";
export const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Mainpage" component={Mainpage} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Projects" component={Infos.Projects} />
          <Stack.Screen name="Skills" component={Infos.Skills} />
          <Stack.Screen name="Bio" component={Infos.Bio} />
          <Stack.Screen name="Experiences" component={Infos.Experiences} />
          <Stack.Screen name="Interests" component={Infos.Interests} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
