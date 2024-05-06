import {StyleSheet, Dimensions, SafeAreaView} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  
  images_text_position: {
    height: winHeight * 0.2,
    justifyContent: 'center',
    marginLeft: winWidth * 0.1,
  },
  images_text_name: {
    fontWeight: '700',
    color: 'white',
    fontSize: winWidth * 0.05,
  },
  images_text: {
    fontWeight: '400',
    color: 'white',
    fontSize: winWidth * 0.03,
  },
  images_text_years: {
    fontWeight: '400',
    color: 'white',
    fontSize: winWidth * 0.03,
  },

  images_view: {
    height: winWidth * 0.37,
    borderRadius: winWidth * 0.05,
    width: winWidth * 0.3,
    marginLeft: winWidth * 0.05,
  },
  body_color_1: {
    backgroundColor: '#F0968C',
  },
  body_color_2: {
    backgroundColor: '#6ED0AD',
  },
  body_color_3: {
    backgroundColor: '#7FCFE7',
  },
  body_color_4: {
    backgroundColor: '#9F96D5',
  },
  body: {
    flexDirection: 'row',
  },
  body_size: {
    height: winWidth * 0.37,
    width: winWidth * 0.85,
    borderRadius: winWidth * 0.05,
    alignSelf: 'center',
    marginTop: winWidth * 0.02,
    margin: winWidth * 0.02,
  },
});
