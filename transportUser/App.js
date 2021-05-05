/*eslint-disable*/
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import Geolocation from '@react-native-community/geolocation';
import React, {useEffect} from 'react';
import {
  StatusBar,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import DestinationSearch from './src/screens/DestinationSearch';
import HomeScreen from './src/screens/HomeScreen';
import Router from './src/navigation/Root.js';
import io from 'socket.io-client';

navigator.geolocation = require('@react-native-community/geolocation');
const App = () => {
  //   constructor(props) {
  //   super(props);
  //   this.state = {
  //     chatMessage: '',
  //     chatMessages: [],
  //   };
  // }
  //   componentDidMount() {
  //     this.socket = io('https://taxiapp-final.herokuapp.com/');
  //     this.socket.on('chat message', msg => {
  //       this.setState({chatMessages: [...this.state.chatMessages, msg]});
  //     });
  //   }

  //   submitChatMessage() {
  //     this.socket.emit('chat message', this.state.chatMessage);
  //     this.setState({chatMessage: ''});
  //   }
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Taxi App Camera Permission',
          message:
            'Taxi App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    } else {
      // IOS
      Geolocation.requestAuthorization();
    }
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content " />
      <Router />
    </>
  );
};

export default App;
