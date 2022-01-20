import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const SearchBar = ({ city, inputHandler, onCitySubmit }) => {
  return (
    <View style={styles.inputBackground}>
      <SimpleLineIcons style={styles.icon} name="location-pin" />
      <TextInput
        style={styles.input}
        placeholder="Enter a city.."
        value={city}
        onChangeText={inputHandler}
        onEndEditing={onCitySubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBackground: {
    backgroundColor: "white",
    opacity: 0.7,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 30,
    marginHorizontal: 10,
  },
});

export default SearchBar;
