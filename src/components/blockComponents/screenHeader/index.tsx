import React from 'react';
import {View, ViewStyle} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';
import AppText from '../../baseComponents/AppText';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../baseComponents/AppButton';
import {BagBlackIcon, GoBackIcon} from '../../../utilities/iconPaths';
import IconWithBadge from '../iconWithBadge';

type PropsType = {
  headerName?: string;
  isBackRequired?: boolean;
  isCartIconRequired?: boolean;
  headerStyle: ViewStyle;
};

const ScreenHeader = ({
  headerName,
  isBackRequired,
  isCartIconRequired,
  headerStyle,
}: PropsType) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, headerStyle]}>
      {isBackRequired && (
        <AppButton onPress={goBack}>
          <GoBackIcon />
        </AppButton>
      )}
      <AppText>{headerName}</AppText>
      {isCartIconRequired ? (
        <IconWithBadge Icon={BagBlackIcon} badgeValue="3" />
      ) : (
        <View />
      )}
    </View>
  );
};

export default ScreenHeader;
