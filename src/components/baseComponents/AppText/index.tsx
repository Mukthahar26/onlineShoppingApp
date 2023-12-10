import {Text} from 'react-native';
import React from 'react';
import styles from './styles';

type props = {
  children: any;
  style?: any;
  onPress?: any;
};

const AppText = ({children, onPress, style}: props) => {
  return (
    <Text onPress={onPress} style={[styles.textStyle, style]}>
      {children}
    </Text>
  );
};

export default AppText;
