import React, {useEffect, useRef} from 'react';
import {Image, View} from 'react-native';
import AppText from '../../baseComponents/AppText';
import {
  decreaseQuantity,
  increaseQuantity,
  removeItemFromCart,
  shoppingCartItem,
} from '../../../redux/slicers/shoppingCartSlicer';
import styles from './styles';
import {useAppDispatch} from '../../../redux/hooks';
import {RectButton, Swipeable} from 'react-native-gesture-handler';

type Props = {
  item: shoppingCartItem;
  editMode: boolean;
  index: number;
};
const ShoppingCartCard = ({item, editMode, index}: Props) => {
  const dispatch = useAppDispatch();
  const swipeableRef = useRef<any>(null);

  const {noOfItemsAdded, id, product, totalPrice} = item;
  const {thumbnail, title, stock} = product;

  useEffect(() => {
    if (editMode && index === 0) {
      setTimeout(() => {
        if (swipeableRef.current) {
          swipeableRef.current.openRight();
        }
      }, 500);
      setTimeout(() => {
        if (swipeableRef.current) {
          swipeableRef.current.close();
        }
      }, 1000);
    }
  }, [editMode]);

  const increaseCount = () => {
    dispatch(increaseQuantity({id}));
  };
  const decreaseCount = () => {
    dispatch(decreaseQuantity({id}));
  };
  const removeItem = () => {
    dispatch(removeItemFromCart({id}));
  };

  const renderRightActions = () => {
    return (
      <RectButton style={styles.rectButton} onPress={removeItem}>
        <AppText style={styles.deleteLabel}>DELETE</AppText>
      </RectButton>
    );
  };

  const renderUI = () => {
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
          {!editMode && (
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
          )}
        </View>
      </View>
    );
  };

  return editMode ? (
    <Swipeable
      containerStyle={styles.swipeable}
      ref={swipeableRef}
      renderRightActions={renderRightActions}>
      {renderUI()}
    </Swipeable>
  ) : (
    renderUI()
  );
};

export default ShoppingCartCard;
