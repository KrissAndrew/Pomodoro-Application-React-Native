import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Timer from "../components/Timer";

const MainScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.imageContainer}>
        <Image
          // ? local image
          source={require("../assets/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Timer />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: { width: "100%", height: "100%" },
  BtnContainer: {
    marginTop: 10,
  },
});

export default MainScreen;
