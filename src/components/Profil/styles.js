import {StyleSheet, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  date_style: {
    fontSize: winWidth * 0.035,
    color: '#949292',
    fontWeight: '500',
  },
  name: {
    fontSize: winWidth * 0.05,
    color: '#020202',
    fontWeight: '500',
  },
  amount: {fontSize: winWidth * 0.04, color: '#020202', fontWeight: '500'},

  photo_style: {
    height: winWidth * 0.15,
    width: winWidth * 0.15,
    borderRadius: winWidth * 0.1,
  },
});
