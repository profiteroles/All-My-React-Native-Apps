import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import BoxScreen from './src/screens/BoxScreen';
import ColorScreen from './src/screens/ColorScreen';
import ComponentScreen from './src/screens/ComponentScreen';
import CountScreen from './src/screens/CountScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Box: BoxScreen,
    Color: ColorScreen,
    Component: ComponentScreen,
    Count:CountScreen,
    Image:ImageScreen,
    List:ListScreen,
    Square:SquareScreen,
    Text:TextScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
