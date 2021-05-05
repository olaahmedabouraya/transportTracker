/*eslint-disable*/

import React, {useState} from 'react';
import {View, Dimensions, Alert, Text} from 'react-native';
import RouteMap from '../../components/RouteMap';
import HomeMap from '../../components/HomeMap';
import TaxiTypes from '../../components/TaxiTypes';
import HomeScreen from '../HomeScreen';

import {useRoute} from '@react-navigation/native';

const SearchResults = props => {
  const route = useRoute();
  console.log(route.params);
  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>

      <View style={{height: 400}}>
        <TaxiTypes />
      </View>
    </View>
  );
};

export default SearchResults;
