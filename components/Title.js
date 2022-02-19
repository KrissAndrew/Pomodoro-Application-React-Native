import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TitleText from "./TitleText";

const Title = () => {
  return <TitleText style={styles.title}>Focus</TitleText>;
};

const styles = StyleSheet.create({
  title: { color: "white", fontSize: 30, textAlign: "center" },
});

export default Title;
