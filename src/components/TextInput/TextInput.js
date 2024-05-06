import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './styles';

const TextInput1 = (props) => {
  const {} =props;
  return (
    <View>
       <View style={styles.bar_container}>
            <View>
              <Text style={styles.bar_text}>UI/UX Designer</Text>
            </View>
            <View style={styles.icon_view}>
              <Image source={close} style={styles.icon} />
            </View>
          </View>
    </View>
  )
}

export default TextInput1
