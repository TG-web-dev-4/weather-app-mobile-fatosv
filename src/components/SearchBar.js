import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const SearchBar = ({ city, inputHandler, onCitySubmit }) => {
  return (
    <View style={styles.inputBackground}>
      <SimpleLineIcons style={styles.icon} name="location-pin" />
      <TextInput
        style={styles.input}
        placeholder="Please enter a city"
        value={city}
        onChangeText={inputHandler}
        onEndEditing={onCitySubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputBackground: {
    backgroundColor: "#F2FFE9",
    opacity: 0.7,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#A6CF98",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 25,
    marginHorizontal: 10,
    color: "#DB6B97",
  },
});

export default SearchBar;
