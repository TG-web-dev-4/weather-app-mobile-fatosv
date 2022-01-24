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
    backgroundColor: "#D4d4d1",
    opacity: 0.7,
    borderRadius: 10,
    height: 50,
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    fontSize: 25,
    marginHorizontal: 10,
  },
});

export default SearchBar;
