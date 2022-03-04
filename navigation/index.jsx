import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ContentScreen from "../screens/ContentScreen";
import OptionsQuizzScreen from "../screens/OptionsQuizzScreen";
import SearchScreen from "../screens/SearchScreen";
import QuizzScreen from "../screens/QuizzScreen";
import Memorial from "../screens/Memorial"

import Success from "../screens/SuccessScreen";
import Error from "../screens/ErrorScreen";
import MaterialScreen from "../screens/MaterialScreen";
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
        <Stack.Screen
          name="CONTEÚDO"
          component={ContentScreen}
          options={{ headerStyle: { backgroundColor: "#FEBD00" } }}
        />
        <Stack.Screen
          name="MATERIAL"
          component={MaterialScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OPÇÕES"
          component={OptionsQuizzScreen}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#282A36" },
          }}
        />
        <Stack.Screen
          name="BUSCA"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QUIZZ"
          component={QuizzScreen}
          options={{
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#282A36" },
          }}
        />
        <Stack.Screen
          name="SUCCESS"
          component={Success}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ERROR"
          component={Error}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MEMORIAL"
          component={Memorial}
        />
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
        headerStyle: { backgroundColor: "#FEBD00" },
      }}
    >
      <BottomTab.Screen
        name="HOME"
        component={TabOneScreen}
        options={({ navigation }) => ({
          title: "HOME",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        })}
      />
      <BottomTab.Screen
        name="DISCIPLINAS"
        component={TabTwoScreen}
        options={{
          title: "DISCIPLINAS",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="bookmark" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
