/*eslint-disable*/

import React from 'react';
import {View, Text, Pressable} from 'react-native';
import styles from './styles.js';
import TaxiTypeRow from '../TaxiTypeRow';
import typesData from '../../assets/data/types';

const TaxiTypes = props => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {typesData.map(type => (
        <TaxiTypeRow type={type} key={type.id} />
      ))}

      <Pressable
        onPress={confirm}
        style={{
          backgroundColor: 'black',
          padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default TaxiTypes;
