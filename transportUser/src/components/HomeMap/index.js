/*eslint-disable*/

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';

const HomeMap = props => {
  const getImage = type => {
    if (type === 'Electric') {
      return require('../../assets/images/top-Electric.png');
    }
    if (type === 'AirCondition') {
      return require('../../assets/images/top-AirCondition.png');
    }
    if (type === 'DoubleDecker') {
      return require('../../assets/images/top-DoubleDecker.png');
    }
    if (type === 'Ukranian') {
      return require('../../assets/images/top-Ukranian.png');
    }
    if (type === 'Cafe') {
      return require('../../assets/images/top-Cafe.png');
    }
    return require('../../assets/images/top-Blue.png');
  };
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;
