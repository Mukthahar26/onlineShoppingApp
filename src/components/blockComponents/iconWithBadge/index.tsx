import React from 'react';

import AppText from '../../baseComponents/AppText';
import AppButton from '../../baseComponents/AppButton';
import styles from './styles';
import {View} from 'react-native';

type props = {
  Icon: any;
  badgeValue: string;
};
const IconWithBadge = ({Icon, badgeValue}: props) => {
  return (
    <AppButton>
      <View style={styles.badgeCircle}>
        <AppText style={styles.badgeCount}>{badgeValue}</AppText>
      </View>
      <Icon />
    </AppButton>
  );
};

export default IconWithBadge;
