import { StackNavigator,NavigationActions} from 'react-navigation';
import LoginScreen from '../Containers/Login'
import HomeScreen from '../Containers/Home'
import Screen1 from '../Containers/Screen1'
import Screen2 from '../Containers/Screen2'
import Screen3 from '../Containers/Screen3'


 const MainNavigator = StackNavigator({
  Login: {
  	screen: LoginScreen,
  	navigationOptions: ({navigation}) => ({
      header: null
    }),
  },
  Home: {
  	screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
    }),
  },
  Screen1: {
  	screen: Screen1,
    navigationOptions: ({navigation}) => ({
      title: 'Screen1',
    }),
  },
  Screen2: {
  	screen: Screen2,
    navigationOptions: ({navigation}) => ({
      title: 'Screen2',
    }),
  },
  Screen3: {
  	screen: Screen3,
    navigationOptions: ({navigation}) => ({
      title: 'Screen3',
    }),
  },

})
export default MainNavigator