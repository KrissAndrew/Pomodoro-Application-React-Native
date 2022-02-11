import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TitleText from "./TitleText";

const Title = () => {
  return (
    <View style={styles.titleContainer}>
      <TitleText style={styles.title}>Pomodoro App</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: { backgroundColor: "#d93535" },
  title: { color: "white", fontSize: 30, textAlign: "center" },
});

export default Title;
