import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WeatherAppScreen from "./src/screens/WeatherAppScreen";
import WeatherDetailScreen from "./src/screens/WeatherDetailScreen";

const navigator = createStackNavigator(
  {
    WeatherApp: WeatherAppScreen,
    WeatherDetail: WeatherDetailScreen,
  },
  {
    initialRouteName: "WeatherApp",
  }
);

export default createAppContainer(navigator);
