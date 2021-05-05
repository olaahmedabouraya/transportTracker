/*eslint-disable*/
import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './styles.js';

export default class StartupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startValue: new Animated.Value(0),
      endValue: 1,
      duration: 2000,
    };
  }
  componentDidMount() {
    Animated.timing(this.state.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
  }
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/startupScreen.gif')}
        style={styles.background}>
        <View>
          <Animated.Image
            source={require('../../assets/images/logoTransit.png')}
            style={[styles.logo, {opacity: this.state.startValue}]}
            resizeMode="contain"></Animated.Image>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text style={styles.getStarted}>Get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
