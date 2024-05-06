import {Text, View, Dimensions,Image} from 'react-native';
import React from 'react';
import styles from './styles';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const profil = props => {
  const {photo, name, date, amount} = props;
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          height: winWidth * 0.18,
          alignItems: 'center',
        }}>
        <View>
          <Image source={photo} style={styles.photo_style} />
        </View>
        <View style={{marginLeft: winWidth * 0.04}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date_style}>{date}</Text>
        </View>
        <View style={{alignItems: 'flex-end', width: winWidth * 0.4}}>
          <Text style={styles.amount}>{amount}</Text>
        </View>
      </View>
    </View>
  );
};

export default profil;
