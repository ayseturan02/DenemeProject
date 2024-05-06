import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  line: {
    backgroundColor: '#CECCCD',
    height: winWidth * 0.002,
    width: winWidth * 0.93,
  },
  bottom_view: {
    height: winWidth * 0.2,
    backgroundColor: 'white',
    width: winWidth * 1,
    marginTop: winWidth * 0.17,
    shadowColor: 'black',
    elevation: 5,
    shadowOpacity: winWidth * 1,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 5,
  },
  settings_style:{
    fontSize: winWidth * 0.09,
    fontWeight: '900',
    color: 'black',
  },
  button_style: {
    height: winWidth * 0.12,
    width: winWidth * 0.9,
    borderRadius: winWidth * 0.08,
    backgroundColor: '#181F70',
  },
  button_text: {
    color: 'white',
    fontWeight: '700',
    fontSize: winWidth * 0.04,
  },
  button_pozition: {
    height: winWidth * 0.12,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
