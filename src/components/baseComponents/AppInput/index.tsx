import React from 'react';
import {TextInput, TextStyle, View, ViewStyle} from 'react-native';
import styles from './styles';
import {colorThemes} from '../../../themes/colors';
import {SearchingIcon} from '../../../utilities/iconPaths';

type Props = {
  onChangeText: any;
  placeholder?: string;
  multiline?: boolean;
  style?: ViewStyle;
  inputStyle?: TextStyle;
  keyboardType?: 'numeric' | 'default';
  autoFocus?: boolean;
  value?: string;
};
const AppInput = ({
  onChangeText,
  placeholder,
  multiline,
  style,
  inputStyle,
  keyboardType,
  autoFocus,
  value,
}: Props) => {
  return (
    <View style={[styles.inputView, style]}>
      <SearchingIcon />
      <TextInput
        value={value}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={colorThemes.placeHolderBlueTextColor}
        multiline={multiline}
        onChangeText={e => onChangeText(e)}
        style={[styles.textField, inputStyle]}
      />
    </View>
  );
};

AppInput.defaultProps = {
  placeholder: 'Please enter Text',
  onChangeText: () => {},
  multiline: false,
  keyboardType: 'default',
  autoFocus: false,
};

export default AppInput;
