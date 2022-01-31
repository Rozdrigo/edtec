import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ContentScreen from "../screens/ContentScreen";
import MaterialScreen from "../screens/MaterialScreen"
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({ colorScheme }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Conteúdos" component={ContentScreen} options={{ headerStyle: {backgroundColor: "#FEBD00" }}} />
        <Stack.Screen name="Material" component={MaterialScreen} options={{ headerShown: false }}/>
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {

  return (
    <BottomTab.Navigator
      initialRouteName="EDTEC"
      screenOptions={{
        tabBarActiveTintColor: "#6D6ADB",
        tabBarInactiveTintColor: "#FF9900",
        tabBarInactiveBackgroundColor: "#FEBD00",
        tabBarActiveBackgroundColor: "#FEBD00",
        headerStyle: {backgroundColor: "#FEBD00"}
      }}
    >
      <BottomTab.Screen
        name="HOME"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: "HOME",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color}/>
        })}
      />
      <BottomTab.Screen
        name="DISCIPLINAS"
        component={TabTwoScreen}
        options={{
          title: "DISCIPLINAS",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
