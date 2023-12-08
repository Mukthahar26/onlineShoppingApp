import React from 'react';
import {screenNames} from '../../constants/constants';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {bottomNavigatorParams} from '../../navigators/bottomNavigator';
import AppText from '../../components/baseComponents/AppText';
import {View} from 'react-native';

type Props = NativeStackScreenProps<bottomNavigatorParams, screenNames.MORETAB>;

const More = ({}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'blue'}}>
      <AppText>More</AppText>
    </View>
  );
};

export default More;
