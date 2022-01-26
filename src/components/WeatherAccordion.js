import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const WeatherAccordion = ({ weatherDetails, day }) => {
  const [isVisible, setIsVisible] = useState(false);

  const date = weatherDetails.daily[day].dt;
  let unixTimestamp = date;
  const milliseconds = unixTimestamp * 1000;
  const dateObject = new Date(milliseconds);
  const weekday = dateObject.toLocaleString("en-UK", {
    weekday: "short",
    month: "numeric",
    day: "numeric",
  });

  const makeVisible = () => {
    if (isVisible == false) {
      setIsVisible(true);
    } else setIsVisible(false);
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity onPress={() => makeVisible()}>
        <View style={styles.accordionTop}>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${weatherDetails.daily[day].weather[0].icon}@2x.png`,
            }}
          />
          <Text style={styles.accordionTextTop}>
            {weekday}: {Math.round(weatherDetails.daily[day].temp.min)} °C /{" "}
            {Math.round(weatherDetails.daily[day].temp.max)} °C
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
            Morning: {Math.round(weatherDetails.daily[day].temp.morn)} °C{" "}
          </Text>
          <Text style={styles.accordionTextBottom}>
            Evening: {Math.round(weatherDetails.daily[day].temp.eve)} °C{" "}
          </Text>
          <Text style={styles.accordionTextBottom}>
            Night: {Math.round(weatherDetails.daily[day].temp.night)} °C{" "}
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

    // borderColor: "black",
    // borderWidth: 1,
  },
  accordionTop: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  accordionTextTop: {
    fontSize: 18,
    fontWeight: "bold",
  },
  weatherIcon: {
    height: 25,
    width: 40,
  },
  icon: {
    fontSize: 20,
  },
  accordionBottom: {
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 10,
  },
  accordionTextBottom: {
    fontSize: 17,
  },
});

export default WeatherAccordion;
