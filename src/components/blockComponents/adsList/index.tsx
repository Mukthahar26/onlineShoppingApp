import React from 'react';
import {FlatList} from 'react-native';
import styles from './styles';
import {offerList} from '../../../constants/dummyData';
import OfferCard from '../offerCard';

type Props = {
  data: any[];
};
const AdsList = ({data}: Props) => {
  const renderItems = ({item}: any) => {
    return <OfferCard style={styles.item} item={item} />;
  };
  return (
    <FlatList
      contentContainerStyle={styles.flatListStyle}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      data={data}
      renderItem={renderItems}
    />
  );
};

export default AdsList;
