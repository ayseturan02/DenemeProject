import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const button = props => {
  const {photo} = props;
  return (
    <View>
      <Image source={photo} style={styles.icon_style}/>
    </View>
  );
};

export default button;
