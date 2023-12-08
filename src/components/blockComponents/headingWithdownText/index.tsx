import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import AppText from '../../baseComponents/AppText';
import {dummyData} from '../../../constants/dummyData';
import {DownArrowIcon} from '../../../utilities/iconPaths';
import styles from './styles';

type HeadingWithDownTextProps = {
  heading: string;
  value: string;
};

const HeadingWithDownText = ({heading, value}: HeadingWithDownTextProps) => {
  return (
    <View>
      <AppText style={[styles.label, styles.title]}>{heading}</AppText>
      <View style={styles.labelWithArrow}>
        <AppText style={styles.label}>{value}</AppText>
        <DownArrowIcon />
      </View>
    </View>
  );
};

export default HeadingWithDownText;
