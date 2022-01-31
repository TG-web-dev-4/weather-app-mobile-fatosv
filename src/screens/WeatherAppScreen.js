import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import API_KEY from "../../env";

const WeatherAppScreen = ({ navigation }) => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchApi = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      setErrorMessage("Oops! Something went wrong..");
    }
  };

  useEffect(() => {
    if (city) {
      fetchApi(weather);
      setIsLoading(true);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/green.jpeg")}
      >
        <SearchBar
          city={city}
          inputHandler={setCity}
          onCitySubmit={() => fetchApi(weather)}
        />
        <View>
          {errorMessage ? (
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              {errorMessage}
            </Text>
          ) : null}
          {isLoading ? (
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              Loading..
            </Text>
          ) : null}
        </View>
        {weather.main && (
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("WeatherDetail", {
                  lon: weather.coord.lon,
                  lat: weather.coord.lat,
                  cityName: weather.name,
                  country: weather.sys.country,
                })
              }
            >
              <WeatherCard weather={weather} />
            </TouchableOpacity>
          </View>
        )}
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
