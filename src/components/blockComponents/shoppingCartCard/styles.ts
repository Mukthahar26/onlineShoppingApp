import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colorThemes} from '../../../themes/colors';
import sizeValues from '../../../themes/sizeValues';

const imageSize = scale(50);
const counterCircle = scale(30);
export default StyleSheet.create({
  thumbnail: {
    width: imageSize,
    height: imageSize,
    borderRadius: scale(5),
  },
  item: {
    paddingTop: sizeValues.size16,
    paddingBottom: sizeValues.size16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageName: {
    flexDirection: 'row',
  },
  namePrice: {
    marginLeft: scale(20),
  },
  title: {
    fontSize: sizeValues.fontMedium,
    fontWeight: '300',
    marginTop: scale(3),
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterButton: {
    backgroundColor: colorThemes.lightGray,
    height: counterCircle,
    width: counterCircle,
    borderRadius: counterCircle / 2,
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  noOfItems: {
    marginLeft: scale(10),
    marginRight: scale(10),
  },
});
