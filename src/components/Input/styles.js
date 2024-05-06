import {StyleSheet, Text, View,Dimensions} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  text_style: {
    fontSize: winWidth * 0.035,
    fontWeight: '700',
  },
  input_view: {
    height: winWidth * 0.15,
    width: winWidth * 0.9,
    borderRadius: winWidth * 0.08,
    backgroundColor: 'transparent',
    borderColor: '#D7D7D7',
    borderWidth: winWidth * 0.004,
  },
});
