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
      // console.log(data);
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
      source={require("../../assets/clouds.jpg")}
    >
      <View style={styles.weatherDetailsContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{cityName}</Text>
        </View>
        {weatherDetails.daily && (
          <View>
            <WeatherAccordion weatherDetails={weatherDetails} />
            <WeatherAccordion weatherDetails={weatherDetails} />
            <WeatherAccordion weatherDetails={weatherDetails} />
            <WeatherAccordion weatherDetails={weatherDetails} />
            <WeatherAccordion weatherDetails={weatherDetails} />
            <WeatherAccordion weatherDetails={weatherDetails} />
            <WeatherAccordion weatherDetails={weatherDetails} />
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
    padding: 50,
  },
  titleText: {
    fontSize: 40,
  },
  weatherDetailsContainer: {
    height: 600,
    width: 350,
    // borderWidth: 1,
    // borderColor: "black",
    alignSelf: "center",
  },
});

export default WeatherDetailScreen;
