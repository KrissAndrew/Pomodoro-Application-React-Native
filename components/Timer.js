import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import MainButton from "./MainButton";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [timerIsOn, setTimerIsOn] = useState(false);

  useEffect(() => {
    if (timerIsOn) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  });

  const timerHandler = () => {
    setTimerIsOn(!timerIsOn);
  };

  const addMinuteHandler = () => {
    setMinutes(minutes + 1);
  };

  const subtractMinuteHandler = () => {
    setMinutes(minutes - 1);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.timerContainer}>
        {!timerIsOn && (
          <MainButton style={styles.btn} onPress={subtractMinuteHandler}>
            <AntDesign name="minuscircleo" size={30} color="white" />
          </MainButton>
        )}
        {minutes === 0 && seconds === 0 ? null : (
          <Text style={styles.timerText}>
            {minutes}:{seconds < 10 ? `0${seconds} ` : `${seconds} `}
          </Text>
        )}
        {!timerIsOn && (
          <MainButton style={styles.btn} onPress={addMinuteHandler}>
            <AntDesign name="pluscircleo" size={30} color="white" />
          </MainButton>
        )}
      </View>
      <MainButton onPress={timerHandler} style={styles.startBtn}>
        {timerIsOn ? "Stop" : "Start"}
      </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "yellow",
  },
  timerContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  timerText: {
    fontFamily: "KaushanScript",
    color: "white",
    fontSize: 70,
  },
  btn: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  startBtn: {
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Timer;
