import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import styles from './styles';
const area = props => {
    const {name,job,years,photo,viewStyle} =props;
  return (
    <View>
    <View style={[viewStyle,styles.body_size,styles.body]}>
      <View>
        <Image
          source={photo}
          style={styles.images_view}
        />
      </View>
      <View style={styles.images_text_position}>
        <Text style={styles.images_text_name}>{name}</Text>
        <Text style={styles.images_text}>{job}</Text>
        <Text style={styles.images_text_years}>{years}</Text>
      </View>
    </View>

  </View>
  )
}

export default area
