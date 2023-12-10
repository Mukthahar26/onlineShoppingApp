import React from 'react';
import {View, FlatList, Dimensions, ViewStyle} from 'react-native';
import styles from './styles';
import ScreenHeader from '../../blockComponents/screenHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import Loader from '../loader';
import logger from '../../../utilities/logger';

const {height} = Dimensions.get('window');

type props = {
  children: any;
  style?: ViewStyle;
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
  badgeCount: number;
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
  badgeCount,
}: props) => {
  const renderContent = () => <View>{children}</View>;

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
          {isHeaderRequired && (
            <ScreenHeader
              badgeCount={badgeCount}
              headerStyle={headerStyle as ViewStyle}
              isBackRequired={isBackRequired}
              headerName={headerName}
              isCartIconRequired={isCartIconRequired}
            />
          )}
          {isScrollRequired ? (
            <FlatList
              data={[{}]}
              contentContainerStyle={[
                styles.container,
                containerStyle,
                {paddingBottom: isIgnoreBottomBar ? scale(80) : scale(10)},
              ]}
              showsVerticalScrollIndicator={false}
              renderItem={renderContent}
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
    <SafeAreaView style={[styles.mainContainerStyle, mainContainerStyle]}>
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
  badgeCount: 0,
};

export default ContainerView;
