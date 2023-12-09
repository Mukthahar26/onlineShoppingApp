import React from 'react';
import ContainerView from '../../components/baseComponents/ContainerView';
import AppText from '../../components/baseComponents/AppText';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigators/rootNavigator';
import {screenNames} from '../../constants/constants';
import StarRating from 'react-native-star-rating';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../themes/colors';
import {SliderBox} from 'react-native-image-slider-box';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {View} from 'react-native';
import CustomButton from '../../components/blockComponents/customButton';
import AppButton from '../../components/baseComponents/AppButton';
import {FavoriteIcon, HeartOutline} from '../../utilities/iconPaths';

type Props = NativeStackScreenProps<
  RootStackParams,
  screenNames.PRODUCTDETAILS
>;
const ProductionDetails = ({route}: Props) => {
  const {
    params: {
      item: {
        brand,
        category,
        description,
        discountPercentage,
        images,
        price,
        rating,
        stock,
        title,
      },
    },
  } = route;

  return (
    <ContainerView mainContainerStyle={styles.container}>
      <View style={styles.subContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={rating}
          starSize={scale(13)}
          fullStarColor={colorThemes.yellow}
          containerStyle={{width: 80}}
        />
      </View>
      <View>
        <AppButton style={styles.favoriteContainer}>
          {true ? <FavoriteIcon /> : <HeartOutline />}
        </AppButton>
        <SliderBox
          images={images}
          dotColor={colorThemes.yellow}
          inactiveDotColor={colorThemes.lightGray}
          circleLoop
          ImageComponent={FastImage}
          ImageComponentStyle={styles.image}
          imageLoadingColor={colorThemes.brandColor}
          dotStyle={styles.dotStyle}
          paginationBoxStyle={styles.paginationBoxStyle}
        />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.priceContainer}>
          <AppText style={styles.price}>{`$ ${price}`}</AppText>
          {discountPercentage && (
            <AppText
              style={styles.offer}>{`$ ${discountPercentage} OFF`}</AppText>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            label="Add to cart"
            backGroundColor={colorThemes.white}
            labelColor={colorThemes.black}
            style={styles.button}
          />
          <CustomButton label="Buy Now" style={styles.button} />
        </View>
        <AppText style={styles.details}>Details</AppText>
        <AppText style={styles.desc}>{description}</AppText>
      </View>
    </ContainerView>
  );
};

export default ProductionDetails;
