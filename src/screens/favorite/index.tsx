import React from 'react';
import {screenNames} from '../../constants/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {bottomNavigatorParams} from '../../navigators/bottomNavigator';
import AppText from '../../components/baseComponents/AppText';
import {View} from 'react-native';

type Props = NativeStackScreenProps<
  bottomNavigatorParams,
  screenNames.FAVORITETAB
>;

const Favorite = ({}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'pink'}}>
      <AppText>Fovorite</AppText>
    </View>
  );
};

export default Favorite;
