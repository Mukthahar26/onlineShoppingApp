import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import ScreenHeader from '../../blockComponents/screenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import Loader from '../loader';
import {colorThemes} from '../../../themes/colors';

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
  loading?: boolean;
  isCartIconRequired: boolean;
  headerStyle?: ViewStyle;
};
const ContainerView = ({
  children,
  containerStyle,
  mainContainerStyle,
  headerName,
  isBackRequired,
  isHeaderRequired,
  isScrollRequired,
  isIgnoreBottomBar,
  loading,
  isCartIconRequired,
  headerStyle,
}: props) => {
  const navigation = useNavigation<any>();

  const renderLoader = () => {
    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Loader />
        </View>
      );
    } else {
      return (
        <>
          {isHeaderRequired && navigation.canGoBack() && (
            <ScreenHeader
              headerStyle={headerStyle}
              isBackRequired={isBackRequired}
              headerName={headerName}
              isCartIconRequired={isCartIconRequired}
            />
          )}
          {isScrollRequired ? (
            <FlatList
              data={[{}]}
              showsVerticalScrollIndicator={false}
              renderItem={() => (
                <View
                  style={[
                    {paddingBottom: isIgnoreBottomBar ? scale(80) : scale(10)},
                    containerStyle,
                  ]}>
                  {children}
                </View>
              )}
              keyExtractor={(_, index) => index.toString()}
            />
          ) : (
            <View style={[styles.container, {height: height}, containerStyle]}>
              {children}
            </View>
          )}
        </>
      );
    }
  };
  return (
    <SafeAreaView style={[{flex: 1}, mainContainerStyle]}>
      {renderLoader()}
    </SafeAreaView>
  );
};

ContainerView.defaultProps = {
  headerName: '',
  isScrollRequired: true,
  isBackRequired: true,
  isHeaderRequired: true,
  isIgnoreBottomBar: false,
  loading: false,
  isCartIconRequired: true,
};

export default ContainerView;
