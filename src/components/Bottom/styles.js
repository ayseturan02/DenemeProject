import {StyleSheet, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  bottom: {
    marginTop: winWidth * 0.05,
    width: winWidth * 0.15,
    alignItems: 'center',
  },

  icon_size: {height: winWidth * 0.07, width: winWidth * 0.07},

  icon_name: {
    fontSize: winWidth * 0.03,
    fontWeight: '600',
    color: '#B2B1B1',
  },
});
