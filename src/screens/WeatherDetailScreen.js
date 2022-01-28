import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import API_KEY from "../../env";
import WeatherAccordion from "../components/WeatherAccordion";

const WeatherDetailScreen = ({ navigation }) => {
  const [weatherDetails, setWeatherDetails] = useState([]);

  const lon = navigation.getParam("lon");
  const lat = navigation.getParam("lat");
  const cityName = navigation.getParam("cityName");

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
        <Text style={styles.titleText}>{cityName}</Text>
      </View>
      <View style={styles.weatherDetailsContainer}>
        {weatherDetails.daily && (
          <View>
            <WeatherAccordion weatherDetails={weatherDetails} day={1} />
            <WeatherAccordion weatherDetails={weatherDetails} day={2} />
            <WeatherAccordion weatherDetails={weatherDetails} day={3} />
            <WeatherAccordion weatherDetails={weatherDetails} day={4} />
            <WeatherAccordion weatherDetails={weatherDetails} day={5} />
            <WeatherAccordion weatherDetails={weatherDetails} day={6} />
            <WeatherAccordion weatherDetails={weatherDetails} day={7} />
          </View>
        )}
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
