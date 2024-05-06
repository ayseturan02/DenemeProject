import { StyleSheet, Text, View,Dimensions, TextInput } from 'react-native'
import React from 'react'
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import styles from './styles';

const input = (props) => {
  const {placeholder} = props
  return (
    <View style={{marginTop: winWidth * 0.02}}>
    <TextInput
      style={[styles.input_view, styles.text_style]}
      placeholder={placeholder}
    />
  </View>
  )
}

export default input

