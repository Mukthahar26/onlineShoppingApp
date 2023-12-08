import React from 'react';
import {View, ViewStyle} from 'react-native';
import AppText from '../../baseComponents/AppText';
import styles from './styles';
import {ImageIcon} from '../../../utilities/iconPaths';
import {colorThemes} from '../../../themes/colors';

type offerCardProps = {
  item: any;
  style: ViewStyle;
};

const OfferCard = ({item, style}: offerCardProps) => {
  const {title, offer, quantity, isActive} = item;
  return (
    <View style={[styles.card, !isActive && styles.disabled, style]}>
      <ImageIcon />
      <View style={styles.col}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.offer}>{offer}</AppText>
        <AppText style={styles.title}>{quantity}</AppText>
      </View>
    </View>
  );
};

export default OfferCard;
