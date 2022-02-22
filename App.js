import { useState } from "react";

import { Platform, StatusBar, View, StyleSheet } from "react-native";
import Title from "./components/Title";

// font imports
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import MainScreen from "./screens/MainScreen";

export default function App() {
  // Font loading configuration
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = async () => {
    await Font.loadAsync({
      // so bs going on here with script names, capitilising as below made it work(?)
      KaushanScript: require("./assets/fonts/KaushanScript-Regular.ttf"),
    });
    setFontLoaded(true);
  };

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
        onError={(err) => {
          console.log(err);
        }}
      />
    );
  }

  let content = (
    <View style={styles.contentContainer}>
      <MainScreen />
    </View>
  );

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
        backgroundColor: "#49d0a3",
      }}
    >
      {content}
      <Title />
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
