import {StyleSheet, Dimensions, SafeAreaView} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({

  B_Images_color: {
    borderColor: '#84B4D1',
  },
  S_Images_color: {
    borderColor: 'black',
  },
  P_Images_color: {
    borderColor: '#DC819B',
  },

  Y_Images_color: {
    borderColor: '#EAC413',
  },
  Images_person_name_position: {
    alignSelf: 'center',
  },
  Images_person_name: {
    fontSize: winWidth * 0.03,
    fontWeight: '400',
    color: 'black',
  },

  Images_border: {
    backgroundColor: 'white',
    borderWidth: winWidth * 0.0065,
    marginTop: winWidth * 0.04,
    marginLeft: winWidth * 0.04,
    height: winWidth * 0.18,
    width: winWidth * 0.18,
    borderRadius: winWidth * 0.1,
  },
  Y_Images: {
    margin: winWidth * 0.009,
    height: winWidth * 0.15,
    width: winWidth * 0.15,
    borderRadius: winWidth * 0.1,
  },
  Y_Scroll_Screens: {
    width: winWidth * 1.5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Y_Scroll: {
    height: winHeight * 0.15,
  },
  Screens: {
    height: winHeight * 1.3,
  },
  y_Screens: {
    height: winHeight * 0.15,
  },

});
