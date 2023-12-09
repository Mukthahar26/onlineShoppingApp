import React, {useState} from 'react';
import AppText from '../../components/baseComponents/AppText';
import ContainerView from '../../components/baseComponents/ContainerView';
import {useAppSelector} from '../../redux/hooks';
import {Alert, FlatList, View} from 'react-native';
import ShoppingCartCard from '../../components/blockComponents/shoppingCartCard';
import {shoppingCartItem} from '../../redux/slicers/shoppingCartSlicer';
import UnderLine from '../../components/baseComponents/underLine';
import styles from './styles';
import CustomButton from '../../components/blockComponents/customButton';

const ShoppingCart = () => {
  const shoppingCartState = useAppSelector(state => state.shoppingCartList);
  const [editMode, setEdmitMote] = useState(false);
  const renderItem = ({item}: {item: shoppingCartItem}) => {
    return <ShoppingCartCard item={item} editMode={editMode} />;
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
  const proceed = () => Alert.alert('Ordered All items');

  return (
    <ContainerView
      isCartIconRequired={false}
      headerName={`Shopping Cart (${shoppingCartState.length})`}>
      <FlatList
        extraData={editMode}
        keyExtractor={item => item.id.toString()}
        data={shoppingCartState}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <UnderLine style={styles.underline} />}
      />
      <AppText onPress={() => setEdmitMote(prev => !prev)} style={styles.edit}>
        {editMode ? 'Done' : 'Edit'}
      </AppText>
      <View style={styles.pricesCard}>
        {pricesList().map(item => {
          return (
            <View style={styles.row}>
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
    </ContainerView>
  );
};

export default ShoppingCart;
