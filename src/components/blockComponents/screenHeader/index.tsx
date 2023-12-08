import React from 'react';
import {View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import styles from './styles';
import AppText from '../../baseComponents/AppText';
import {useNavigation} from '@react-navigation/native';

type PropsType = {
  headerName?: string;
  isBackRequired?: boolean;
};

const ScreenHeader = ({headerName, isBackRequired}: PropsType) => {
  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={[styles.container, isBackRequired && styles.container2]}>
      {isBackRequired && (
        <EvilIcons
          onPress={goBack}
          name="chevron-left"
          style={styles.arrowIcon}
        />
      )}
      <AppText
        style={[styles.nameLabel, isBackRequired && styles.nameLabel2]}
        numberOfLines={1}>
        {headerName}
      </AppText>
      {isBackRequired && <View />}
    </View>
  );
};

export default ScreenHeader;
