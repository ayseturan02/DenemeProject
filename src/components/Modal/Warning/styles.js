import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  warning_size: {
    width: winWidth * 0.9,
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: winWidth * 0.08,
  },
  warning_style: {
    backgroundColor: '#ECF4F6',
    height: winWidth * 0.4,
    width: winWidth * 0.9,
    borderRadius: winWidth * 0.05,
  },
  text_style: {
    fontSize: winWidth * 0.04,
    fontWeight: '600',
    color: 'black',
  },
  text_pozition: {
    alignContent: 'center',
    width: winWidth * 0.6,
    alignSelf: 'center',
    marginTop: winWidth * 0.05,
  },
  text_pozition2:{
    alignContent: 'center',
    width: winWidth * 0.4,
    alignSelf: 'center',
  },
  link_style: {
    color: '#181F70',
    fontSize: winWidth * 0.04,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

  link_pozition: {
    alignContent: 'center',
    width: winWidth * 0.3,
    alignSelf: 'center',
    marginTop: winWidth * 0.1,
  },
});
