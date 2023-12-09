import React from 'react';
import {Image, View} from 'react-native';
import {productItemType} from '../../../redux/slicers/productSlicer';
import AppButton from '../../baseComponents/AppButton';
import styles from './styles';
import {FavoriteIcon, HeartOutline} from '../../../utilities/iconPaths';
import AppText from '../../baseComponents/AppText';
import Card from '../../baseComponents/card';

type Props = {
  item: productItemType;
  onPressItem: (item: productItemType) => void;
};

const ProductCard = ({item, onPressItem}: Props) => {
  const {images, price, title, thumbnail} = item;
  return (
    <Card style={styles.card} onPress={() => onPressItem(item)}>
      <AppButton style={styles.favoriteContainer}>
        {true ? <FavoriteIcon /> : <HeartOutline />}
      </AppButton>
      <Image source={{uri: thumbnail}} style={styles.thumbnail} />
      <View style={styles.details}>
        <AppText style={styles.price}>{`$ ${price}`}</AppText>
        <AppText style={styles.title}>{title}</AppText>
      </View>
    </Card>
  );
};

export default ProductCard;
