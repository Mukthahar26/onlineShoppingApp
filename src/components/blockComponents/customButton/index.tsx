import React from 'react';
import {ViewStyle} from 'react-native';
import AppButton from '../../baseComponents/AppButton';
import AppText from '../../baseComponents/AppText';
import styles from './styles';
import {colorThemes} from '../../../themes/colors';

type Props = {
  label: string;
  backGroundColor: string;
  labelColor: string;
  style?: ViewStyle;
  onPress: () => void;
};

const CustomButton = ({
  label,
  backGroundColor,
  labelColor,
  onPress,
  style,
}: Props) => {
  return (
    <AppButton
      onPress={onPress}
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
