import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const WeatherCard = ({ weather }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.weatherTitle}>
          <Text style={styles.titleText}>
            {Math.round(weather.main.temp)} °C in {weather.name}
          </Text>
          <Image
            style={styles.weatherIcon}
            source={{
              uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
            }}
          />
        </View>
        <View style={styles.weatherDescription}>
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
    backgroundColor: "#D4d4d1",
    opacity: 0.7,
  },
  weatherTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
  },
  weatherIcon: {
    height: 80,
    width: 100,
  },
  weatherDescription: {
    flex: 2,
    alignItems: "center",
  },
  descriptionText: {
    fontSize: 20,
    padding: 10,
  },
});

export default WeatherCard;
