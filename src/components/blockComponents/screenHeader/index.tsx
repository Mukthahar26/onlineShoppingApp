import React from 'react';
import {View, ViewStyle} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';
import AppText from '../../baseComponents/AppText';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../baseComponents/AppButton';
import {BagBlackIcon, GoBackIcon} from '../../../utilities/iconPaths';
import IconWithBadge from '../iconWithBadge';
import {screenNames} from '../../../constants/constants';
import {RootStackParams} from '../../../navigators/rootNavigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type PropsType = {
  headerName?: string;
  isBackRequired?: boolean;
  isCartIconRequired?: boolean;
  headerStyle: ViewStyle;
  badgeCount: number;
};

const ScreenHeader = ({
  headerName,
  isBackRequired,
  isCartIconRequired,
  headerStyle,
  badgeCount,
}: PropsType) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const goBack = () => {
    navigation.goBack();
  };
  const navigateToCart = () => {
    navigation.navigate(screenNames.SHOPPINGCART);
  };

  return (
    <View style={[styles.container, headerStyle]}>
      <View
        style={[
          styles.subContainer,
          isCartIconRequired && {justifyContent: 'space-between'},
        ]}>
        {isBackRequired && (
          <AppButton onPress={goBack}>
            <GoBackIcon />
          </AppButton>
        )}
        <AppText style={styles.headerName}>{headerName}</AppText>
        {isCartIconRequired ? (
          <AppButton onPress={navigateToCart}>
            <IconWithBadge Icon={BagBlackIcon} badgeValue={badgeCount} />
          </AppButton>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default ScreenHeader;
