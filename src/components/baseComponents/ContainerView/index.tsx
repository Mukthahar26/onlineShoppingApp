import React from 'react';
import {View, FlatList, Dimensions, ViewStyle} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ScreenHeader from '../../blockComponents/screenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';

const {height} = Dimensions.get('window');

type props = {
  children: any;
  style?: ViewStyle;
  lottiStyle?: ViewStyle;
  containerStyle?: ViewStyle;
  headerName?: string;
  isBackRequired?: boolean;
  mainContainerStyle?: ViewStyle;
  isScrollRequired: boolean;
  isHeaderRequired?: boolean;
  isIgnoreBottomBar?: boolean;
};
const ContainerView = ({
  children,
  style,
  mainContainerStyle,
  headerName,
  isBackRequired,
  isHeaderRequired,
  isScrollRequired,
  isIgnoreBottomBar,
}: props) => {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={[{flex: 1}, mainContainerStyle]}>
      {(isHeaderRequired || headerName) && navigation.canGoBack() && (
        <ScreenHeader isBackRequired={isBackRequired} headerName={headerName} />
      )}
      {isScrollRequired ? (
        <FlatList
          data={[{}]}
          renderItem={() => (
            <View
              style={[
                {paddingBottom: isIgnoreBottomBar ? scale(80) : scale(10)},
                styles.container,
                style,
              ]}>
              {children}
            </View>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      ) : (
        <View style={[styles.container, {height: height}, style]}>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};

ContainerView.defaultProps = {
  headerName: '',
  isScrollRequired: true,
  isBackRequired: true,
  isHeaderRequired: true,
  isIgnoreBottomBar: false,
};

export default ContainerView;
