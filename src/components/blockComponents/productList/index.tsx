import React from 'react';
import {FlatList, View} from 'react-native';
import {productItemType} from '../../../redux/slicers/productSlicer';
import ProductCard from '../productCard';
import styles from './styles';
import {isArray} from '../../../utilities/utils';

type Props = {
  data: {
    limit?: number;
    products: productItemType[];
  };
  onPressItem: (data: productItemType) => void;
};

const ProductList = ({data, onPressItem}: Props) => {
  const productsList = data && isArray(data.products) ? data.products : [];

  const renderItem = ({item}: {item: productItemType}) => {
    return <ProductCard onPressItem={onPressItem} item={item} />;
  };
  return (
    <View>
      <FlatList
        numColumns={2}
        style={styles.container}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={item => item.id.toString()}
        data={productsList}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductList;
