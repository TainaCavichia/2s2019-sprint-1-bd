import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriasScreen from './pages/categorias';
import MainScreen from './pages/main';
import DataScreen from './pages/data';
import SignInScreen from './pages/signin';

const AuthStack = createStackNavigator({
    Sign: { screen: SignInScreen },
  });
  
  const MainNavigator = createBottomTabNavigator(
    {
      Data: {
        screen: DataScreen,
      },
      Main: {
        screen: MainScreen,
      },
      Categorias: {
        screen: CategoriasScreen,
      },
    },
    {
      initialRouteName:'Main',
      tabBarOptions:{
        showIcon: true,
        showLabel: false,
        inactiveBackgroundColor: 'blue',
        activeBackgroundColor:'darkblue',
        style: {
          width: '100%',
          height: 50,
        },
      },
    },
  );
  
  export default createAppContainer(createSwitchNavigator(
    {
      MainNavigator,
      AuthStack
    },
    {
      initialRouteName: 'AuthStack',
    },
  ),
  );