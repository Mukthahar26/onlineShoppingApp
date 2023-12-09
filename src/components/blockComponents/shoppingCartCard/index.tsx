import React from 'react';
import {Image, View} from 'react-native';
import AppText from '../../baseComponents/AppText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
  shoppingCartItem,
} from '../../../redux/slicers/shoppingCartSlicer';
import styles from './styles';
import {useAppDispatch} from '../../../redux/hooks';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import AppButton from '../../baseComponents/AppButton';

type Props = {
  item: shoppingCartItem;
  editMode: boolean;
};
const ShoppingCartCard = ({item, editMode}: Props) => {
  const dispatch = useAppDispatch();
  const {noOfItemsAdded, id, product, totalPrice} = item;
  const {thumbnail, title, stock} = product;

  const increaseCount = () => {
    dispatch(increaseQuantity({id}));
  };
  const decreaseCount = () => {
    dispatch(decreaseQuantity({id}));
  };
  const removeItem = () => {
    dispatch(removeItemFromCart({id}));
  };
  return (
    <View style={styles.item}>
      <View style={styles.imageName}>
        <Image source={{uri: thumbnail}} style={styles.thumbnail} />
        <View style={styles.namePrice}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.title}>{`$${totalPrice}`}</AppText>
        </View>
      </View>

      <View style={styles.counterContainer}>
        {!editMode ? (
          <>
            {noOfItemsAdded !== 1 && (
              <AppText onPress={decreaseCount} style={styles.counterButton}>
                -
              </AppText>
            )}
            <AppText style={styles.noOfItems}>{noOfItemsAdded}</AppText>
            {noOfItemsAdded <= stock && (
              <AppText onPress={increaseCount} style={styles.counterButton}>
                +
              </AppText>
            )}
          </>
        ) : (
          <AppButton onPress={removeItem}>
            <AntDesign name="delete" size={scale(18)} color={colorThemes.red} />
          </AppButton>
        )}
      </View>
    </View>
  );
};

export default ShoppingCartCard;
