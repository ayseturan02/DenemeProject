import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  pozition: {
    flexDirection: 'row',
    height: winWidth * 0.18,
    justifyContent:"space-between",
    paddingHorizontal:winWidth*0.03, 
    alignItems: 'center',
  },

  icon_size: {
    height: winWidth * 0.07,
    width: winWidth * 0.07,
    margin: winWidth * 0.04,
  },

  text_style: {
    fontSize: winWidth * 0.04,
    fontWeight: '700',
    color: 'black',
  },

  arrow_pozition: {
    alignItems:"flex-end",
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  arrow_size: {height: winWidth * 0.03, width: winWidth * 0.03},
});
