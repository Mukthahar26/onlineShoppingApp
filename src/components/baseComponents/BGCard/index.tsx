import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const BGCard = ({style}: any) => {
  return <View style={[styles.container, style]} />;
};

export default BGCard;
