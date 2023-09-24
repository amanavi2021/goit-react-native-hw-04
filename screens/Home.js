import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";
import LogOutSvg from "../assets/images/log-out.svg";

const Tabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();
  return (
    <Tabs.Navigator
    // screenOptions={({ route }) => ({
    //   tabBarIcon: ({ focused, color, size }) => {
    //     let iconName;
    //   },
    // })}
    // tabBarOptions={{
    //   activeTintColor: "tomato",
    //   inactiveTintColor: "gray",
    // }}
    >
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerTintColor: "#212121",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
          },
          headerRight: () => (
            <LogOutSvg
              style={{ position: "absolute", right: 10, bottom: 10 }}
              width={25}
              height={25}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerTintColor: "#212121",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17,
          },
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <Text>Home page</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Posts")}
      >
        <Text>Публікації</Text>
      </TouchableOpacity> */}
    </Tabs.Navigator>
  );
}
