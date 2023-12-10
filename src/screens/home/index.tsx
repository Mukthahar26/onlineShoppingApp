import React, {useEffect} from 'react';
import AppText from '../../components/baseComponents/AppText';
import {FlatList, View} from 'react-native';
import styles from './styles';
import {dummyData, offerList} from '../../constants/dummyData';
import {BagIcon} from '../../utilities/iconPaths';
import IconWithBadge from '../../components/blockComponents/iconWithBadge';
import AppInput from '../../components/baseComponents/AppInput';
import ContainerView from '../../components/baseComponents/ContainerView';
import HeadingWithDownText from '../../components/blockComponents/headingWithdownText';
import OfferCard from '../../components/blockComponents/offerCard';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {productListFetch} from '../../redux/fetchCalls/productListFetch';
import ProductList from '../../components/blockComponents/productList';
import EmptyState from '../../components/blockComponents/emptyState';
import {screenNames} from '../../constants/constants';
import {useNavigation} from '@react-navigation/native';
import AppButton from '../../components/baseComponents/AppButton';

const Home = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();
  const {productState, shoppingCartState} = useAppSelector(state => {
    return {
      productState: state.productList,
      shoppingCartState: state.shoppingCartList,
    };
  });
  const {productList, productLoading, productError} = productState;
  useEffect(() => {
    dispatch(productListFetch());
  }, []);

  const renderItems = ({item}: any) => {
    return <OfferCard style={styles.item} item={item} />;
  };
  const onPressItem = (item: any) => {
    navigation.navigate(screenNames.PRODUCTDETAILS, {item});
  };

  const navigateToCart = () => {
    navigation.navigate(screenNames.SHOPPINGCART);
  };

  return (
    <ContainerView
      loading={productLoading}
      isHeaderRequired={false}
      containerStyle={styles.container}>
      <View style={styles.topContainer}>
        <AppButton onPress={navigateToCart} style={styles.headerContainer}>
          <AppText style={styles.nameLabel}>{dummyData.name}</AppText>
          <IconWithBadge Icon={BagIcon} badgeValue={shoppingCartState.length} />
        </AppButton>
        <AppInput
          style={styles.inputcontainer}
          placeholder={dummyData.searchPlaceHolder}
        />
        <View style={styles.addressContainer}>
          <HeadingWithDownText
            heading={dummyData.deliverTo}
            value={dummyData.address}
          />
          <HeadingWithDownText
            heading={dummyData.within}
            value={dummyData.hour}
          />
        </View>
      </View>
      <FlatList
        contentContainerStyle={styles.flatListStyle}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={offerList}
        renderItem={renderItems}
      />
      <View style={styles.subContainer2}>
        <AppText style={styles.recommendedTitle}>
          {dummyData.recommonded}
        </AppText>
        {!productError ? (
          <ProductList onPressItem={onPressItem} data={productList} />
        ) : (
          <EmptyState message="Product list is empty" />
        )}
      </View>
    </ContainerView>
  );
};

export default Home;
