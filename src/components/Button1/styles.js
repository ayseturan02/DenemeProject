import {StyleSheet, Dimensions, SafeAreaView} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  icon2_position: {
    height: winWidth * 0.3,
    width: winWidth * 0.8,
    justifyContent: 'flex-start',
    margin: winWidth * 0.04,
  },

  view2: {
    height: winWidth * 1,
    width: winWidth * 1,
    borderBottomLeftRadius: winWidth * 0.1,
    borderBottomRightRadius: winWidth * 0.1,
  },
  plus: {
    height: winWidth * 0.15,
    width: winWidth * 0.15,
    borderRadius: winWidth * 0.1,
    backgroundColor: '#F5C62F',
    bottom: winWidth * 0.1,
  },

  icon_position: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: winWidth * 0.03,
  },
  icon_text_position: {
    width: winWidth * 0.1,
    alignSelf: 'center',
  },
  icon_text: {
    fontSize: winWidth * 0.025,
    color: '#7C7C7C',
    fontWeight: '500',
  },
  icon_style: {
    height: winWidth * 0.07,
    width: winWidth * 0.07,
  },

  Tab_bar: {
    backgroundColor: 'white',
    height: winHeight * 0.06,
    width: winWidth * 1,
  },
  
});
