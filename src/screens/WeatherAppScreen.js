import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

const WeatherAppScreen = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/weather?q=amsterdam&appid=5897c638224879a677e37baf3ab28b3b&unit=metric"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setWeather(data));
  // }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/clouds.jpg")}
      >
        <SearchBar
          city={city}
          inputHandler={setCity}
          onCitySubmit={() => setWeather()}
        />
        <Text>
          It's {weather.description} in {city}
        </Text>
        <WeatherCard />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: "cover",
    flex: 1,
    justifyContent: "center",
  },
});

export default WeatherAppScreen;
