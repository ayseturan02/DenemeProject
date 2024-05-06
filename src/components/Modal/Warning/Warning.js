import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';


const Warning = props => {
  const {text, text1,link} = props;
  return (
    <View style={styles.warning_size}>
      <View style={styles.warning_style}>
        <View style={styles.text_pozition}>
          <Text style={styles.text_style}>{text}</Text>
          <View style={styles.text_pozition2}>
            <Text style={styles.text_style}> {text1}</Text>
          </View>
          <View style={styles.link_pozition}>
            <Text style={styles.link_style}>{link}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Warning;
