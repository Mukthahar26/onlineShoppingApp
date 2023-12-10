import React, {useCallback, useState} from 'react';
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
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {addToCart} from '../../redux/slicers/shoppingCartSlicer';
import {useFocusEffect} from '@react-navigation/native';
import {toastMessage} from '../../utilities/utils';

type Props = NativeStackScreenProps<
  RootStackParams,
  screenNames.PRODUCTDETAILS
>;
const ProductionDetails = ({route}: Props) => {
  const dispatch = useAppDispatch();
  const [isAreadyAdded, setIsAlreadyAdded] = useState(false);
  const {
    params: {item},
  } = route;
  const {id, description, discountPercentage, images, price, rating, title} =
    item;
  const shoppingCartState = useAppSelector(state => state.shoppingCartList);

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

  const buyNow = () => {
    toastMessage('Buying option clicked');
  };

  return (
    <ContainerView
      badgeCount={shoppingCartState.length}
      containerStyle={styles.container}>
      <View style={styles.subContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <StarRating
          disabled={true}
          maxStars={5}
          rating={rating}
          starSize={scale(13)}
          emptyStarColor="red"
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
          dotStyle={styles.dotStyle}
          paginationBoxStyle={styles.paginationBoxStyle}
        />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.priceContainer}>
          <AppText style={styles.price}>{`$${price}`}</AppText>
          {discountPercentage && (
            <AppText
              style={styles.offer}>{`$${discountPercentage} OFF`}</AppText>
          )}
        </View>
        <View style={styles.buttonContainer}>
          <CustomButton
            onPress={onPressAddToCart}
            label={isAreadyAdded ? 'Added to Cart' : 'Add to cart'}
            backGroundColor={colorThemes.white}
            labelColor={colorThemes.black}
            style={styles.button}
          />
          <CustomButton
            onPress={buyNow}
            label="Buy Now"
            style={styles.button}
          />
        </View>
        <AppText style={styles.details}>Details</AppText>
        <AppText style={styles.desc}>{description}</AppText>
      </View>
    </ContainerView>
  );
};

export default ProductionDetails;
