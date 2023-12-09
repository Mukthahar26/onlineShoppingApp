import React from 'react';
import AppText from '../../baseComponents/AppText';
import styles from './styles';
import {View} from 'react-native';

type props = {
  Icon: any;
  badgeValue: number;
};
const IconWithBadge = ({Icon, badgeValue}: props) => {
  return (
    <View>
      <View style={styles.badgeCircle}>
        <AppText style={styles.badgeCount}>{badgeValue}</AppText>
      </View>
      <Icon />
    </View>
  );
};

export default IconWithBadge;
