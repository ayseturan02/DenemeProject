import { StyleSheet,Dimensions} from 'react-native'
import React from 'react'
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default  styles = StyleSheet.create({

    view: {
        height: winHeight * 1,
        width: winWidth * 1,
        backgroundColor: 'black',
        opacity: 0.8,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      },
    
      change: {
        height: winWidth * 0.85,
        borderTopLeftRadius: winWidth * 0.05,
        borderTopRightRadius: winWidth * 0.05,
        width: winWidth * 1,
        borderRadius: winWidth * 0.04,
        backgroundColor: 'white',
      },
      line: {
        height: winWidth * 0.02,
        width: winWidth * 0.4,
        backgroundColor: '#030305',
        borderRadius: winWidth * 0.04,
      },
      change_text: {
        fontSize: winWidth * 0.07,
        fontWeight: '700',
        marginTop: winWidth * 0.02,
        color: '#040744',
      },
      input_view: {
        height: winWidth * 0.15,
        width: winWidth * 0.9,
        borderRadius: winWidth * 0.08,
        backgroundColor: 'transparent',
        borderColor: '#D7D7D7',
        borderWidth: winWidth * 0.004,
      },
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
      text_style:{
        fontSize:winWidth*0.035,
        fontWeight:"700",
      }





});