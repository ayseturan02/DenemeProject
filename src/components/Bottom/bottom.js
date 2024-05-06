import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;


import styles from './styles';

const bottom = props => {
  const {icon, name} = props;
  return (
    <View style={styles.bottom}>
      <View>
        <Image
          source={icon}
          style={styles.icon_size}
        />
      </View>
      <View>
        <Text
          style={styles.icon_name}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default bottom;
