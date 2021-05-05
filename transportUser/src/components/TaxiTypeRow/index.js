/*eslint-disable*/

import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import styles from './styles.js';

import Ionicons from 'react-native-vector-icons/Ionicons';

const TaxiTypeRow = props => {
  const {type} = props;

  const getImage = () => {
    if (type.type === 'Electric') {
      return require('../../assets/images/Electric.jpg');
    }
    if (type.type === 'AirCondition') {
      return require('../../assets/images/AirCondition.jpg');
    }
    if (type.type === 'DoubleDecker') {
      return require('../../assets/images/DoubleDecker.jpg');
    }
    if (type.type === 'Ukranian') {
      return require('../../assets/images/Ukranian.jpg');
    }
    if (type.type === 'Cafe') {
      return require('../../assets/images/Cafe.jpg');
    }
    return require('../../assets/images/Blue.jpg');
  };

  return (
    <View style={styles.container}>
      {/*  Image */}
      <Image style={styles.image} source={getImage()} />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={'person'} size={16} />
        </Text>
        <Text style={styles.time}>8:03PM drop off</Text>
      </View>
      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est. LE{type.price}</Text>
      </View>
    </View>
  );
};

export default TaxiTypeRow;
