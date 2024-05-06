import { StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({

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