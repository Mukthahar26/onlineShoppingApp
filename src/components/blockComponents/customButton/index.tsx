import React, {FunctionComponent} from 'react';
import {View, ViewStyle} from 'react-native';
import AppButton from '../../baseComponents/AppButton';
import AppText from '../../baseComponents/AppText';
import styles from './styles';
import {colorThemes} from '../../../themes/colors';

type Props = {
  label: string;
  backGroundColor: string;
  labelColor: string;
  style?: ViewStyle;
};

const CustomButton = ({label, backGroundColor, labelColor, style}: Props) => {
  return (
    <AppButton
      style={
        [styles.button, {backgroundColor: backGroundColor}, style] as ViewStyle
      }>
      <AppText style={[styles.label, {color: labelColor}]}>{label}</AppText>
    </AppButton>
  );
};
CustomButton.defaultProps = {
  backGroundColor: colorThemes.darkBlue,
  labelColor: colorThemes.white,
};

export default CustomButton;
