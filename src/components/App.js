import React, {Component} from 'react';
        
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createSwitchNavigator,createAppContainer} from "react-navigation";
import Profilepic from './Profilepic';
import Header from './Header';
import Content from './Content'; 
import Loading from './Loading'
import SignUp from './SignUp'
import Login from './Login'
import Home from './Home'


class App extends Component {
  render() {
    return (
      <View>
        return <AppNavigator />
      </View>
    );
  }
}

const AppNavigator = createSwitchNavigator({
  
    Loading,
    SignUp,
    Login,
    Home,
    Profilepic,
    Header,
    Content 
  },
  {
    initialRouteName: 'Loading'
  }
);


export default createAppContainer(AppNavigator);