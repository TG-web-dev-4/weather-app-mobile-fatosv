import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import API_KEY from "../../env";

const WeatherDetailScreen = ({ navigation }) => {
  const [details, setDetails] = useState([]);

  const lon = navigation.getParam("lon");
  const lat = navigation.getParam("lat");

  const fetchOneCallApi = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/onecall?&&appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`
      );
      const data = await response.json();
      // console.log(data);
      setDetails(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOneCallApi(details);
  }, []);

  return (
    <ImageBackground
      style={styles.image}
      source={require("../../assets/clouds.jpg")}
    >
      <View style={styles.weatherDetailsContainer}>
        {details.daily && (
          <View style={styles.weatherDetails}>
            <Text>
              Day of the Week {Math.round(details.daily[0].temp.min)} °C /{" "}
              {Math.round(details.daily[0].temp.max)} °C
            </Text>
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
  weatherDetailsContainer: {
    height: 550,
    width: 350,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "#D4d4d1",
    opacity: 0.7,
    alignSelf: "center",
  },
});

export default WeatherDetailScreen;
