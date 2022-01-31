import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.weatherTitle}>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
            }}
          />
          <Text style={styles.titleText}>
            {Math.round(weather.main.temp)} °C
          </Text>
        </View>
        <View style={styles.weatherDescription}>
          <Text style={styles.descriptionText}>
            Feels like: {Math.round(weather.main.feels_like)} °C
          </Text>
          <Text style={styles.descriptionText}>
            Min. temp: {Math.round(weather.main.temp_min)} °C
          </Text>
          <Text style={styles.descriptionText}>
            Max. temp: {Math.round(weather.main.temp_max)} °C
          </Text>
          <Text style={styles.descriptionText}>
            Humidity: {weather.main.humidity}%
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  card: {
    height: 450,
    width: 350,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "#A6CF98",
    opacity: 0.7,
    borderColor: "#F2FFE9",
    borderWidth: 1,
  },
  weatherTitle: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 35,
    fontWeight: "bold",
    position: "absolute",
    left: 115,
    top: 90,
  },
  weatherIcon: {
    height: 130,
    width: 130,
  },
  weatherDescription: {
    flex: 2,
    justifyContent: "space-around",
    alignItems: "center",
  },
  descriptionText: {
    fontSize: 25,
    padding: 10,
  },
});

export default WeatherCard;
