import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CategoriasScreen from './pages/categorias';
import MainScreen from './pages/main';
import DataScreen from './pages/data';
import SignInScreen from './pages/signin';
import ProfileScreen from './pages/profile';

const AuthStack = createStackNavigator({
    Sign: { screen: SignInScreen },
  });
  
  const MainNavigator = createBottomTabNavigator(
    {
      Main: {
        screen: MainScreen,
      },
      Data: {
        screen: DataScreen,
      },
      Categorias: {
        screen: CategoriasScreen,
      },
      Profile:{
        screen: ProfileScreen,
      },
    },
    {
      initialRouteName:'Main',
      tabBarOptions:{
        showIcon: true,
        showLabel: false,
        inactiveBackgroundColor: '#131313',
        activeBackgroundColor:'#670309',
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