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
          <Text style={styles.accordionTextTop}>{weekday} </Text>
          <View>
            <Image
              style={styles.weatherIcon}
              source={{
                uri: `http://openweathermap.org/img/wn/${weatherDetails.daily[day].weather[0].icon}@2x.png`,
              }}
            />
          </View>
          <Text style={styles.accordionTextTop}>
            {Math.round(weatherDetails.daily[day].temp.min)} °C /{" "}
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
    backgroundColor: "#A6CF98",
    opacity: 0.7,
    borderColor: "#F2FFE9",
    borderWidth: 1,
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
    textAlign: "center",
    padding: 5,
    flex: 2,
  },
  weatherIcon: {
    height: 25,
    width: 40,
    flex: 2,
  },
  icon: {
    fontSize: 20,
    color: "#DB6B97",
  },
  accordionBottom: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  accordionTextBottom: {
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 5,
  },
});

export default WeatherAccordion;
