import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

const Tabs = createBottomTabNavigator();

export default function Home() {
  const navigation = useNavigation();
  return (
    <>
      <Text>Home page</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Posts")}
      >
        <Text>Публікації</Text>
      </TouchableOpacity>
    </>
  );
}
