import React from 'react';
import {Pressable, ActivityIndicator, ViewStyle, TextStyle} from 'react-native';
import {scale} from 'react-native-size-matters';
import AppText from '../AppText';
import {AppButtonProps} from './types';
import {colorThemes} from '../../../themes/colors';

const AppButton = ({
  onPress,
  style,
  textStyle,
  text,
  children,
  adjustsFontSizeToFit,
  showLoader,
  onLongPress,
  onKeyDown,
  onKeyUp,
  isDisabled,
  disabledStyle,
  isUderLined,
  testID,
  ...otherProps
}: AppButtonProps) => {
  const onClickPress = () => {
    if (!isDisabled) {
      onPress();
    }
  };

  const onClickLongPress = () => {
    if (!isDisabled) {
      onLongPress();
    }
  };

  return (
    <Pressable
      accessibilityLabel={testID}
      testID={testID}
      onPressIn={onKeyDown}
      onPressOut={onKeyUp}
      disabled={isDisabled}
      style={[style as ViewStyle]}
      onPress={onClickPress}
      onLongPress={onClickLongPress}
      {...otherProps}>
      {text && (
        <AppText
          style={
            [
              {color: colorThemes.black1},
              textStyle,
              isUderLined && {textDecorationLine: 'underline'},
              isDisabled && {color: colorThemes.disabledTextColor},
            ] as TextStyle
          }
          numberOfLines={1}>
          {text}
        </AppText>
      )}
      {showLoader && (
        <ActivityIndicator
          animating={showLoader}
          color={colorThemes.black1 as string}
          size="small"
          style={{marginLeft: scale(30)}}
        />
      )}
      {children}
    </Pressable>
  );
};

AppButton.defaultProps = {
  onPress: () => {},
  onLongPress: () => {},
  style: {},
  textStyle: {},
  children: null,
  text: undefined,
  adjustsFontSizeToFit: true,
  showLoader: false,
  isDisabled: false,
  disabledStyle: {},
};

export default AppButton;
