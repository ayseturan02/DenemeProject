import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const settings = props => {
  const {icon, name, ok, onPressFunc} = props;
  return (
    <TouchableOpacity style={styles.pozition} onPress={onPressFunc}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={icon} style={styles.icon_size} />
        <Text style={styles.text_style}>{name}</Text>
      </View>

      <View style={styles.arrow_pozition}>
        <View>
          <Image source={ok} style={styles.arrow_size} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default settings;
