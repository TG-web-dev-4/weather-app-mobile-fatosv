import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WeatherCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Weather Card</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  card: {
    height: 500,
    width: 350,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "white",
    opacity: 0.7,
  },
});

export default WeatherCard;
