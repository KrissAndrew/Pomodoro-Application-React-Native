import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import MainButton from "./MainButton";

const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [selectedMinutes, setSelectedMinutes] = useState(minutes);

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

  const startTimerHandler = () => {
    setSelectedMinutes(minutes);
    setTimerIsOn(true);
  };

  const stopTimerHandler = () => {
    setMinutes(selectedMinutes);
    setSeconds(0);
    setTimerIsOn(false);
  };

  const addMinuteHandler = () => {
    if (minutes < 60) {
      setMinutes(minutes + 1);
    }
  };

  const subtractMinuteHandler = () => {
    if (minutes > 1) {
      setMinutes(minutes - 1);
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.timerContainer}>
        {!timerIsOn && (
          <MainButton style={styles.btn} onPress={subtractMinuteHandler}>
            <AntDesign name="minuscircleo" size={35} color="white" />
          </MainButton>
        )}
        {minutes === 0 && seconds === 0 ? null : (
          <Text style={styles.timerText}>
            {minutes}:{seconds < 10 ? `0${seconds} ` : `${seconds} `}
          </Text>
        )}
        {!timerIsOn && (
          <MainButton style={styles.btn} onPress={addMinuteHandler}>
            <AntDesign name="pluscircleo" size={35} color="white" />
          </MainButton>
        )}
      </View>
      <View style={styles.btnContainer}>
        {timerIsOn && (
          <MainButton onPress={stopTimerHandler} style={styles.startBtn}>
            Stop
          </MainButton>
        )}
        {!timerIsOn && (
          <MainButton onPress={startTimerHandler} style={styles.startBtn}>
            Start
          </MainButton>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: "center",
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50,
  },
  timerText: {
    fontFamily: "KaushanScript",
    color: "white",
    fontSize: Dimensions.get("window").width > 330 ? 70 : 50,
    width: "55%",
    textAlign: "center",
  },
  btn: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    marginHorizontal: Dimensions.get("window").width > 330 ? 20 : 5,
  },
  startBtn: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderColor: "white",
    borderWidth: 1,
  },
});

export default Timer;
