import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {send} from '../../assets/icons';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles1 = StyleSheet.create({
  button_pozition: {
    flexDirection: 'row',
    height: winWidth * 0.2,
    width: winWidth * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
  },
  pp_size: {
    height: winWidth * 0.1,
    width: winWidth * 0.1,
    borderRadius: winWidth * 0.02,
  },

  myCard_text: {
    fontSize: winWidth * 0.07,
    color: '#020202',
    fontWeight: '500',
  },
  myCard_text_pozition: {
    width: winWidth * 0.9,
    alignSelf: 'center',
    alignItems: 'flex-start',
  },
  send: {
    flexDirection: 'row',
    padding: winWidth * 0.06,
    height: winWidth * 0.2,
    width: winWidth * 0.8,
  },
  send_text: {
    fontSize: winWidth * 0.05,
    fontWeight: '600',
    color: '#020202',
  },
  photo_pozition: {
    marginLeft: -winWidth * 0.11,
    marginTop: -winWidth * 0.02,
  },
  photo_size: {
    height: winWidth * 0.15,
    width: winWidth * 0.15,
    borderRadius: winWidth * 1,
    borderColor: 'white',
    borderWidth: winWidth * 0.01,
  },
  photo_pozition2: {
    marginLeft: -winWidth * 0.23,
    marginTop: -winWidth * 0.02,
  },
  send_input: {
    height: winHeight * 0.2,
    width: winWidth * 0.9,
    alignSelf: 'center',
    marginTop: winWidth * 0.04,
  },
  input: {
    backgroundColor: '#F1F1F1',
    height: winWidth * 0.13,
    width: winWidth * 0.73,
    borderRadius: winWidth * 0.03,
  },
  send_view: {
    backgroundColor: '#F56F3A',
    height: winWidth * 0.13,
    width: winWidth * 0.15,
    borderRadius: winWidth * 0.03,
  },
  send_photo: {
    height: winWidth * 0.06,
    width: winWidth * 0.06,
    margin: winWidth * 0.04,
  },
  card_button: {
    backgroundColor: '#F5F4F4',
    width: winWidth * 1,
    height: winHeight * 0.07,
    alignItems: 'center',
  },
  card_button_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: winWidth * 0.8,
    height: winHeight * 0.07,
    alignItems: 'center',
  },
});
