/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import React from 'react';
import store from './src/redux/store';
import {Provider} from 'react-redux';

const MyApp = () => (
  <Provider store={store}>
    <StatusBar hidden />
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => MyApp);
