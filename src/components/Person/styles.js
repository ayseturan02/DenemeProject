import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  pp_size: {
    height: winWidth * 0.17,
    width: winWidth * 0.17,
    borderRadius: winWidth * 1,
  },
  text_style: {
    fontSize: winWidth * 0.04,
    fontWeight: '800',
    color: '#CECCCD',
  },
  name_style: {
    fontSize: winWidth * 0.05,
    fontWeight: '700',
    color: 'black',
  },
  icon_pozition: {
    width: winWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon_style: {height: winWidth * 0.05, width: winWidth * 0.05},
});
