import React from 'react';
import {createAppContainer} from 'react-navigation';
import page3 from './src/pages/3';
import page5 from './src/pages/5';
import result from './src/pages/result';
import last from './src/pages/last';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {primary} from './src/utils/colors';

const EndNavigator = createStackNavigator(
  {
    result: {
      screen: result,
      navigationOptions: {
        header: null,
      },
    },
    last: {
      screen: last,
      navigationOptions: {
        title: 'Nova Tela',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);
const ICON_SIZE = 26;
const AppTabs = createBottomTabNavigator(
  {
    page3: {
      screen: page3,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="database" size={ICON_SIZE} color={tintColor} />
        ),
      },
    },
    page5: {
      screen: page5,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" size={ICON_SIZE} color={tintColor} />
        ),
      },
    },
    end: {
      screen: EndNavigator,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="file" size={ICON_SIZE} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    initialRoute: 'Main',
    tabBarOptions: {
      activeTintColor: primary,
      showLabel: false,
      indicatorStyle: {
        opacity: 0,
      },
      style: {
        backgroundColor: 'white',
        // borderTopColor: 'transparent',
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 10},
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 3,
      },
    },
  },
);

console.disableYellowBox = true;
const App = createAppContainer(AppTabs);

export default App;
