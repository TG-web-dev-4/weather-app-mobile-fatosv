import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import API_KEY from "../../env";
import WeatherAccordion from "../components/WeatherAccordion";

const WeatherDetailScreen = ({ navigation }) => {
  const [weatherDetails, setWeatherDetails] = useState([]);

  const lon = navigation.getParam("lon");
  const lat = navigation.getParam("lat");
  const cityName = navigation.getParam("cityName");
  const country = navigation.getParam("country");

  const fetchOneCallApi = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?&&appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`
      );
      const data = await response.json();
      setWeatherDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOneCallApi(weatherDetails);
  }, []);

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/green.jpeg")}
    >
      <View style={styles.title}>
        <Text style={styles.titleText}>
          {cityName}, {country}
        </Text>
      </View>
      <View style={styles.weatherDetailsContainer}>
        {weatherDetails.daily &&
          weatherDetails.daily.map((day, index) => {
            if (index === 0) return false;
            if (index > 7) return;
            return (
              <WeatherAccordion
                key={index}
                weatherDetails={weatherDetails}
                day={index}
              />
            );
          })}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
  title: {
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 40,
  },
  weatherDetailsContainer: {
    height: 500,
    width: 350,
    alignSelf: "center",
    borderRadius: 10,
  },
});

export default WeatherDetailScreen;
