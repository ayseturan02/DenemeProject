import {StyleSheet, Text, View,Dimensions} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
export default styles = StyleSheet.create({
  project_images: {
    height: winHeight * 0.17,
    width: winWidth * 0.41,
    borderRadius: winWidth * 0.03,
    marginTop: winWidth * 0.04,
  },
});
