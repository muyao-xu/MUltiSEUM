import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';

import {
  StackNavigator,
} from 'react-navigation';

import HomePage from './src/components/HomePage';
import Upload from './src/components/Upload';
import Language from './src/components/Language';
import Result from './src/components/Result';
//import CreateRoomScreen from './src/components/CreateRoomScreen';
//import EnterRoomScreen from './src/components/EnterRoomScreen';

const AppStack = StackNavigator(
  {
    HomePage: { screen: HomePage },
    Upload: { screen: Upload },
    Language: { screen: Language },
    Result: { screen: Result }
    //EnterRoomScreen: { screen: EnterRoomScreen },
    //EditingScreen: { screen: EditingScreen },
  },
  {
    //initialRouteName: 'CreateRoomScreen',
    // initialRouteName: '',
    navigationOptions: {
      headerStyle: {
        // backgroundColor: '#FF876C',
        backgroundColor: 'transparent',
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        borderBottomWidth: 0,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitle: null
    },
  }
);

class App extends Component<Props> {
  render() {
    return (
      <AppStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('frontend', () => App);
