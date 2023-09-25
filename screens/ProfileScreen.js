import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import DeleteSvg from "../assets/images/delete.svg";
import LogOutSvg from "../assets/images/log-out.svg";
import AvatarImage from "../assets/images/avatar.png";

const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.avatarWrapper}>
          <Image style={styles.avatar} source={AvatarImage} />
          {/* <AddSvg style={styles.addIcon} width={25} height={25} /> */}
          <DeleteSvg style={styles.deleteIcon} width={37} height={37} />
          <LogOutSvg style={styles.logOutIcon} />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Natali Romanova</Text>
        </View>
      </View>
      <ImageBackground
        style={styles.image}
        source={require("../assets/images/BG.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  wrapper: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  header: {
    alignItems: "center",
    marginTop: 92,
    marginBottom: 32,
  },
  headerTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    color: "#212121",
  },

  avatarWrapper: {
    position: "relative",
  },
  avatar: {
    position: "absolute",
    bottom: -63,
    left: 130,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
    marginRight: "auto",
    marginLeft: "auto",
  },

  deleteIcon: {
    position: "absolute",
    right: 128,
    top: 18,
  },
  logOutIcon: {
    position: "absolute",
    right: 16,
    top: 22,
  },
});
