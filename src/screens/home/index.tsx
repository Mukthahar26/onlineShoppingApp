import React from 'react';
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

const Home = () => {
  const renderItems = ({item}: any) => {
    return <OfferCard style={styles.item} item={item} />;
  };
  return (
    <ContainerView style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.headerContainer}>
          <AppText style={styles.nameLabel}>{dummyData.name}</AppText>
          <IconWithBadge Icon={BagIcon} badgeValue="3" />
        </View>
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
      </View>
    </ContainerView>
  );
};

export default Home;
