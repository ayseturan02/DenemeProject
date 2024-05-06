import {StyleSheet, Text, View,Dimensions,Image} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
import styles from './styles';

const person = props => {
  const {profil,text,name,icon} = props;
  return (
    <View style={{flexDirection: 'row', marginTop: winWidth * 0.04}}>
      <Image source={profil} style={styles.pp_size} />
      <View style={{margin: winWidth * 0.02}}>
        <Text style={styles.text_style}>{text}</Text>
        <Text style={styles.name_style}>{name}</Text>
      </View>
      <View style={styles.icon_pozition}>
        <Image source={icon} style={styles.icon_style} />
      </View>
    </View>
  );
};

export default person;
