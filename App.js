import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BoxScreen from './src/screens/BoxScreen';
import ColorScreen from './src/screens/ColorScreen';
import ComponentsScreen from "./src/screens/ComponentsScreen";
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from "./src/screens/HomeScreen";
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Counter: CounterScreen,
    Image: ImageScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
