import {StyleSheet} from 'react-native';
import {colorThemes} from '../../themes/colors';
import {scale} from 'react-native-size-matters';
import sizeValues from '../../themes/sizeValues';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  topContainer: {
    backgroundColor: colorThemes.blue,
    paddingLeft: sizeValues.size16,
    paddingRight: sizeValues.size16,
    paddingBottom: scale(12),
  },
  headerContainer: {
    marginTop: scale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameLabel: {
    color: colorThemes.white,
    fontSize: scale(22),
  },
  inputcontainer: {
    marginTop: scale(30),
    backgroundColor: colorThemes.darkBlue,
    height: scale(50),
    borderRadius: scale(50 / 2),
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(30),
  },
  title: {
    opacity: 0.5,
    fontWeight: '800',
  },
  label: {
    color: colorThemes.white,
    marginRight: scale(4),
  },
  labelWithArrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatListStyle: {
    marginTop: scale(30),
    marginLeft: sizeValues.size16,
  },
  item: {
    marginRight: sizeValues.size16,
  },
  subContainer2: {
    paddingLeft: sizeValues.size16,
    paddingRight: sizeValues.size16,
  },
  recommendedTitle: {
    fontSize: scale(25),
    marginTop: scale(25),
  },
});

export default styles;
