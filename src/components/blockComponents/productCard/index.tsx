import React, {useCallback, useState} from 'react';
import {Image, View} from 'react-native';
import {productItemType} from '../../../redux/slicers/productSlicer';
import AppButton from '../../baseComponents/AppButton';
import styles from './styles';
import {
  AddToCartIcon,
  FavoriteIcon,
  HeartOutline,
} from '../../../utilities/iconPaths';
import AppText from '../../baseComponents/AppText';
import Card from '../../baseComponents/card';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {addToCart} from '../../../redux/slicers/shoppingCartSlicer';
import {useFocusEffect} from '@react-navigation/native';

type Props = {
  item: productItemType;
  onPressItem: (item: productItemType) => void;
};

const ProductCard = ({item, onPressItem}: Props) => {
  const dispatch = useAppDispatch();
  const [isAreadyAdded, setIsAlreadyAdded] = useState(false);
  const shoppingCartState = useAppSelector(state => state.shoppingCartList);
  const {id, price, title, thumbnail} = item;

  useFocusEffect(
    useCallback(() => {
      const index = shoppingCartState.findIndex(item => item.id === id);
      if (index !== -1) {
        setIsAlreadyAdded(true);
      } else setIsAlreadyAdded(false);
    }, [shoppingCartState]),
  );

  const onPressAddToCart = () => {
    if (!isAreadyAdded) dispatch(addToCart(item));
  };
  return (
    <Card style={styles.card} onPress={() => onPressItem(item)}>
      <AppButton style={styles.favoriteContainer}>
        {true ? <FavoriteIcon /> : <HeartOutline />}
      </AppButton>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <View style={styles.details}>
        {!isAreadyAdded && (
          <AppButton onPress={onPressAddToCart} style={styles.addToCart}>
            <AddToCartIcon />
          </AppButton>
        )}
        <AppText style={styles.price}>{`$${price}`}</AppText>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </Card>
  );
};

export default ProductCard;
