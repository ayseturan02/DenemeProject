import {StyleSheet, Dimensions, SafeAreaView, ScrollView} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles2 = StyleSheet.create({
  SafeAreaView: {
    height: winHeight * 1,
    width: winWidth * 1,
  },
  ScrollView: {
    height: winHeight * 1,
  },
  Screens: {
    height: winHeight * 1.3,
  },
  text_size: {
    fontWeight: '600',
    fontSize: winWidth * 0.08,
    color: 'black',
  },
  text_position: {
    height: winWidth * 0.4,
    width: winWidth * 1,
  },
  shape: {
    height: winWidth * 0.14,
    width: winWidth * 0.75,
    borderRadius: winWidth * 0.05,
    backgroundColor: 'white',
    borderColor: '#DDDDDD',
    borderWidth: winWidth * 0.005,
  },
  shape_color: {
    height: winWidth * 0.14,
    width: winWidth * 0.4,
    borderRadius: winWidth * 0.05,
    backgroundColor: '#451253',
  },
  shape_text: {
    fontSize: winWidth * 0.04,
    color: 'white',
    fontWeight: '300',
  },
  shape_text2: {
    fontSize: winWidth * 0.04,
    color: 'black',
    fontWeight: '300',
  },
  shape_text_position: {
    justifyContent: 'center',
    height: winHeight * 0.07,
    alignSelf: 'center',
    width: winWidth * 0.34,
    alignItems: 'center',
  },
  history: {
    width: winWidth * 0.9,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  history_color: {
    fontSize: winWidth * 0.043,
    fontWeight: '500',
    color: 'black',
  },
  USD_color: {
    fontSize: winWidth * 0.043,
    fontWeight: '500',
    color: '#F56F3A',
  },
  y_Screens: {
    height: winHeight * 0.2,
  },

  Y_Scroll_Screens: {
    width: winWidth * 2,
    justifyContent: 'space-around',
  },

  number_style: {
    fontSize: winWidth * 0.04,
    color: 'black',
    fontWeight: '800',
  },
  text_target: {
    fontSize: winWidth * 0.037,
    fontWeight: '700',
    color: '#A2A0A0',
  },
});
