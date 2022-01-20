import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";

const WeatherAppScreen = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/clouds.jpg")}
      >
        <SearchBar
          city={city}
          inputHandler={setCity}
          onCitySubmit={() => console.log("city submitted")}
        />
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
