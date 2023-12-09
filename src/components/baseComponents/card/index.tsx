import React from 'react';
import {ViewStyle} from 'react-native';
import styles from './styles';
import AppButton from '../AppButton';

type Props = {
  children: any;
  style: ViewStyle;
  onPress: () => void;
};

const Card = ({children, style, onPress}: any) => {
  return (
    <AppButton onPress={onPress} style={[styles.container, style] as ViewStyle}>
      {children}
    </AppButton>
  );
};

export default Card;
