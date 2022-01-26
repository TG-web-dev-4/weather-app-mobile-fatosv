import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const WeatherAccordion = ({ weatherDetails }) => {
  const [isVisible, setIsVisible] = useState(false);

  const makeVisible = () => {
    if (isVisible == false) {
      setIsVisible(true);
    } else setIsVisible(false);
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity onPress={() => makeVisible()}>
        <View style={styles.accordionTop}>
          <Text style={styles.accordionTextTop}>
            Day of the Week {Math.round(weatherDetails.daily[0].temp.min)} °C /{" "}
            {Math.round(weatherDetails.daily[0].temp.max)} °C
          </Text>
          {!isVisible ? (
            <AntDesign name="down" style={styles.icon} />
          ) : (
            <AntDesign name="up" style={styles.icon} />
          )}
        </View>
      </TouchableOpacity>
      {isVisible && (
        <View style={styles.accordionBottom}>
          <Text style={styles.accordionTextBottom}>
            Temperature Morning {Math.round(weatherDetails.daily[0].temp.morn)}{" "}
            °C Evening {Math.round(weatherDetails.daily[0].temp.eve)} °C Night{" "}
            {Math.round(weatherDetails.daily[0].temp.night)} °C
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: "#D4d4d1",
    opacity: 0.7,
  },
  accordionTop: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    fontSize: 20,
  },
  accordionBottom: {
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});

export default WeatherAccordion;
