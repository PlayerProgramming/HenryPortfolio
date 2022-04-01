import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Mainpage from "./Mainpage";
import * as Infos from "./Infos";
export const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen name="Mainpage" component={Mainpage} />
        </Stack.Group>

        <Stack.Group screenOptions={{ presentation: "modal" }}>
          <Stack.Screen name="Project" component={Infos.Project} />
          <Stack.Screen name="Programming" component={Infos.Programming} />
          <Stack.Screen name="Bio" component={Infos.Bio} />
          <Stack.Screen name="Button4" component={Infos.Button4} />
          <Stack.Screen name="Button5" component={Infos.Button5} />
          <Stack.Screen name="Button6" component={Infos.Button6} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
