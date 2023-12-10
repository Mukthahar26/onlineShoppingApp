import {StyleSheet} from 'react-native';
import {colorThemes} from '../../themes/colors';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  subContainer: {
    padding: scale(20),
  },
  title: {
    fontSize: scale(50),
    fontWeight: '300',
    marginBottom: scale(10),
  },
  image: {
    backgroundColor: colorThemes.black,
  },
  dotStyle: {
    width: scale(20),
    marginHorizontal: -5,
    height: scale(5),
  },
  paginationBoxStyle: {
    alignSelf: 'flex-start',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: colorThemes.darkBlue,
    fontWeight: '600',
    fontSize: scale(18),
  },
  offer: {
    color: colorThemes.white,
    fontWeight: '300',
    fontSize: scale(12),
    backgroundColor: colorThemes.darkBlue,
    padding: scale(7),
    paddingLeft: scale(10),
    paddingRight: scale(10),
    borderRadius: scale(20),
    marginLeft: scale(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(25),
  },
  button: {
    width: '48%',
  },
  details: {
    fontSize: scale(16),
    marginTop: scale(25),
  },
  desc: {
    fontSize: scale(12),
    color: colorThemes.black40,
    marginTop: scale(10),
  },
  favoriteContainer: {
    height: scale(35),
    width: scale(35),
    backgroundColor: colorThemes.white,
    borderRadius: scale(35 / 2),
    position: 'absolute',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    top: 5,
    right: 20,
  },
});

export default styles;
