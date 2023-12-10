import React, {useState} from 'react';
import AppText from '../../components/baseComponents/AppText';
import ContainerView from '../../components/baseComponents/ContainerView';
import {useAppSelector} from '../../redux/hooks';
import {Alert, FlatList, View, ViewStyle} from 'react-native';
import ShoppingCartCard from '../../components/blockComponents/shoppingCartCard';
import {shoppingCartItem} from '../../redux/slicers/shoppingCartSlicer';
import UnderLine from '../../components/baseComponents/underLine';
import styles from './styles';
import CustomButton from '../../components/blockComponents/customButton';
import EmptyState from '../../components/blockComponents/emptyState';

const ShoppingCart = () => {
  const shoppingCartState = useAppSelector(state => state.shoppingCartList);
  const [editMode, setEditMode] = useState(false);
  const cartLength = shoppingCartState.length;

  const renderItem = ({
    item,
    index,
  }: {
    index: number;
    item: shoppingCartItem;
  }) => {
    return <ShoppingCartCard item={item} index={index} editMode={editMode} />;
  };

  const getTotalPriceForAllITems = () =>
    shoppingCartState.reduce((a, b) => a + b.totalPrice, 0);

  const pricesList = () => {
    const total = getTotalPriceForAllITems();
    return [
      {value: 'Sub Total', amount: `$${total}`},
      {value: 'Delivery', amount: '$2'},
      {value: 'Total', amount: `$${total + 2}`},
    ];
  };
  const proceed = () => Alert.alert('Proceed Clicked');

  return (
    <ContainerView
      containerStyle={
        [
          styles.containerStyle,
          cartLength && styles.removeCenterStyle,
        ] as ViewStyle
      }
      isCartIconRequired={false}
      headerName={`Shopping Cart (${cartLength})`}>
      {cartLength ? (
        <>
          <FlatList
            extraData={editMode}
            keyExtractor={item => item.id.toString()}
            data={shoppingCartState}
            renderItem={renderItem}
            ItemSeparatorComponent={() => (
              <UnderLine style={styles.underline} />
            )}
          />
          <AppText
            onPress={() => setEditMode(prev => !prev)}
            style={styles.edit}>
            {editMode ? 'Done' : 'Edit'}
          </AppText>
          <View style={styles.pricesCard}>
            {pricesList().map((item, index) => {
              return (
                <View key={index} style={styles.row}>
                  <AppText>{item.value}</AppText>
                  <AppText>{item.amount}</AppText>
                </View>
              );
            })}
            <CustomButton
              style={styles.button}
              onPress={proceed}
              label="Proceed to check out"
            />
          </View>
        </>
      ) : (
        <View style={styles.emptyStateContainer}>
          <EmptyState message="Shopping Cart is empty" />
        </View>
      )}
    </ContainerView>
  );
};

export default ShoppingCart;
