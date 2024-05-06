import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const story = props => {
  const {name, color, photo, control} = props;
  return (
    <View style={[styles.Images_border, color]}>
      <Image source={photo} style={styles.Y_Images} />
      <View style={styles.Images_person_name_position}>
        <Text style={styles.Images_person_name}>{name}</Text>
      </View>
    </View>
  );
};

export default story;
