import React from 'react';
import {FlatList, View} from 'react-native';
import {productItemType} from '../../../redux/slicers/productSlicer';
import ProductCard from '../productCard';
import styles from './styles';

type Props = {
  data: {
    limit?: number;
    products: productItemType[];
  };
  onPressItem: (data: productItemType) => void;
};

const ProductList = ({data, onPressItem}: Props) => {
  const renderItem = ({item}: {item: productItemType}) => {
    return <ProductCard onPressItem={onPressItem} item={item} />;
  };
  return (
    <View>
      <FlatList
        numColumns={2}
        style={styles.container}
        columnWrapperStyle={styles.columnWrapper}
        keyExtractor={(_, index) => index.toString()}
        data={data.products}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ProductList;
