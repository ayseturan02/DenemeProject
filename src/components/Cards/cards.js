import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const cards = props => {
  const {photo, card_name, star, no, date, card_name2} = props;
  return (
    <View style={{marginLeft: winWidth * 0.04}}>
        <Image source={photo} style={styles.cards_size} />
        <View style={{position: 'absolute', padding: winWidth * 0.06}}>
          <Text style={styles.text_size}>{card_name}</Text>
          <Text style={styles.usd_size}>25,633.00 USD</Text>
          <View
            style={{
              flexDirection: 'row',
              height: winWidth * 0.05,
              width: winWidth * 0.8,
            }}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: winWidth * 0.03,
              }}>
              <Image source={star} style={styles.star_size} />
              <Image source={star} style={styles.star_size} />
              <Image source={star} style={styles.star_size} />
              <Image source={star} style={styles.star_size} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: winWidth * 0.03,
                marginLeft: winWidth * 0.05,
              }}>
              <Image source={star} style={styles.star_size} />
              <Image source={star} style={styles.star_size} />
              <Image source={star} style={styles.star_size} />
              <Image source={star} style={styles.star_size} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: winWidth * 0.03,
                marginLeft: winWidth * 0.05,
              }}>
              <Image source={star} style={styles.star_size} />
              <Image source={star} style={styles.star_size} />
              <Image source={star} style={styles.star_size} />
              <Image source={star} style={styles.star_size} />
            </View>
            <View
              style={{
                alignItems: 'flex-end',
                width: winWidth * 0.2,
                justifyContent: 'center',
              }}>
              <Text style={styles.no_size}>{no}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: winWidth * 0.05,
            }}>
            <View>
              <Text style={styles.date_size}>{date}</Text>
            </View>
            <View style={{marginLeft: winWidth * 0.35}}>
              <Text style={styles.card_name2}>{card_name2}</Text>
            </View>
          </View>
        </View>
    </View>
  );
};

export default cards;
