import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
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
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height > 600 ? 30 : 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default MainScreen;
