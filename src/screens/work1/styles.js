import {StyleSheet, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  tab_button_position: {
    fontSize: winWidth * 0.04,
    fontWeight: '500',
    color: 'white',
    margin: winWidth * 0.05,
  },
  tab_button_text: {
    fontSize: winWidth * 0.04,
    fontWeight: '900',
    color: 'white',
    margin: winWidth * 0.05,
    marginLeft: winWidth * 0.3,
  },
  tab_button: {
    height: winHeight * 0.08,
    width: winWidth * 0.8,
    backgroundColor: '#EFCD44',
    borderRadius: winWidth * 0.1,
    alignSelf: 'center',
    marginBottom: winWidth * 0.05,
  },
  project_images: {
    height: winHeight * 0.17,
    width: winWidth * 0.41,
    borderRadius: winWidth * 0.03,
    marginTop: winWidth * 0.04,
  },
  project_button_text: {
    fontSize: winWidth * 0.033,
    margin: winWidth * 0.021,
    color: 'white',
    fontWeight: '500',
  },

  project_button: {
    height: winWidth * 0.1,
    width: winWidth * 0.2,
    backgroundColor: '#EFCD44',
    borderRadius: winWidth * 0.05,
  },
  project_position: {
    width: winWidth * 0.85,
    marginTop: winWidth * 0.04,
  },
  project: {
    fontSize: winWidth * 0.05,
    fontWeight: '700',
    color: 'black',
  },
  following: {
    width: winWidth * 0.3,
    alignItems: 'center',
    margin: winWidth * 0.04,
  },

  followers: {
    width: winWidth * 0.3,
    alignItems: 'center',
    margin: winWidth * 0.04,
  },
  follow_text: {
    fontSize: winWidth * 0.04,
    color: '#868686',
    fontWeight: '400',
  },
  follow_count: {
    fontSize: winWidth * 0.05,
    color: '#DA7144',
    fontWeight: '700',
  },
  line2: {
    backgroundColor: '#C4CCCD',
    width: winWidth * 0.002,
    height: winWidth * 0.22,
  },
  line: {
    backgroundColor: '#C4CCCD',
    width: winWidth * 0.85,
    height: winWidth * 0.002,
    marginTop: winWidth * 0.09,
  },

  biography_button_text: {
    color: 'white',
    fontSize: winWidth * 0.04,
    fontWeight: '700',
    margin: winWidth * 0.02,
    marginLeft: winWidth * 0.07,
  },
  biography_button: {
    height: winWidth * 0.11,
    backgroundColor: '#EFCD44',
    width: winWidth * 0.31,
    borderRadius: winWidth * 0.1,
    marginTop: winWidth * 0.09,
  },
  biography_text_position: {
    width: winWidth * 0.7,
  },
  green_point: {
    height: winWidth * 0.034,
    width: winWidth * 0.034,
    borderRadius: winWidth * 1,
    backgroundColor: '#2D9449',
    marginLeft: winWidth * 0.02,
    marginTop: winWidth * 0.12,
  },
  biography_text: {
    fontWeight: '400',
    fontSize: winWidth * 0.03,
    top: winWidth * 0.02,
  },

  biography_name: {
    fontWeight: '700',
    fontSize: winWidth * 0.05,
    marginTop: winWidth * 0.1,
  },
  biography_position: {
    alignSelf: 'center',
    marginTop: -winWidth * 0.45,
  },

  biography: {
    height: winHeight * 0.4,
    width: winWidth * 0.85,
    backgroundColor: 'white',
    borderRadius: winWidth * 0.06,
    shadowColor: 'black',
    elevation: winWidth * 0.02,
  },

  image_size: {
    height: winWidth * 0.6,
    width: winWidth * 0.5,
    bottom: winWidth * 0.3,
  },
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
    height: winWidth * 0.06,
    width: winWidth * 0.06,
  },

  Tab_bar: {
    backgroundColor: 'white',
    height: winHeight * 0.06,
    width: winWidth * 1,
  },

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

  Scroll: {
    height: winHeight * 1,
  },
  SafeAreaView: {
    height: winHeight * 1,
    width: winWidth * 1,
  },
  icon_view: {
    width: winWidth * 0.49,
    margin: winWidth * 0.01,
    alignItems: 'flex-end',
  },
  icon: {
    height: winWidth * 0.05,
    width: winWidth * 0.05,
  },
  bar_text: {
    color: '#5A5F60',
    fontWeight: '700',
    fontSize: winWidth * 0.04,
  },
  bar_container: {
    flexDirection: 'row',
    height: winWidth * 0.15,
    width: winWidth * 0.85,
    backgroundColor: '#E8ECEF',
    alignSelf: 'center',
    borderRadius: winWidth * 0.08,
    padding: winWidth * 0.04,
    margin: winWidth * 0.04,
  },
});
