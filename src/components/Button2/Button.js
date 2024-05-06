import {StyleSheet, Text, View, TouchableOpacity,Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Button = (props) => {
    const {modalFunc} = props;
  return (
    <TouchableOpacity style={{marginTop: winWidth * 0.05}} onPress={modalFunc}>
      <View style={styles.button_style}>
        <View style={styles.button_pozition}>
          <Text style={styles.button_text}>SAVE</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
