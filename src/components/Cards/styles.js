import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  cards_size: {
    height: winHeight * 0.2,
    width: winWidth * 0.65,
    borderRadius: winWidth * 0.05,
  },
  text_size: {
    color: 'white',
    fontSize: winWidth * 0.045,
    fontWeight: '400',
  },
  usd_size: {
    color: 'white',
    fontSize: winWidth * 0.05,
    fontWeight: '400',
  },
  star_size: {
    height: winWidth * 0.015,
    width: winWidth * 0.015,
  },
  no_size: {
    color: 'white',
    fontSize: winWidth * 0.04,
    fontWeight: '500',
  },
  date_size: {
    color: 'white',
    fontSize: winWidth * 0.04,
    fontWeight: '400',
  },
  card_name2: {
    color: 'white',
    fontSize: winWidth * 0.04,
    fontWeight: '400',
  },

});
