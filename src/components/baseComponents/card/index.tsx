import React from 'react';
import {ViewStyle} from 'react-native';
import styles from './styles';
import AppButton from '../AppButton';

const Card = ({children, style, onPress}: any) => {
  return (
    <AppButton onPress={onPress} style={[styles.container, style] as ViewStyle}>
      {children}
    </AppButton>
  );
};

export default Card;
