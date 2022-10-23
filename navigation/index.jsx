import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  Link,
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
import ImageZoom from "../screens/ImageZoom";
import { Pressable, Touchable } from "react-native";
import { Modal } from "react-native-web";
import SideBar from "../screens/SideBar";

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
      <Stack.Group screenOptions={{ presentation: 'transparentModal', animation: 'slide_from_left' }}>
        <Stack.Screen
            name="SIDEBAR"
            component={SideBar}
            options={{
              headerShown: false,
            }}
            screenOptions={{ headerTintColor: "white", presentation: 'transparentModal' }}
          />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
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
      <Stack.Screen
          name="IMAGEM"
          component={ImageZoom}
        />
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
          headerLeft: ({ color })=>
          <Pressable 
            onPress={()=>navigation.navigate("SIDEBAR")}
            style={{
              marginLeft: 10
            }}>
            <TabBarIcon name="bars" color={color}/>
          </Pressable>,
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
