import {
  SafeAreaView,
  ScrollView,
  View,
  Dimensions,
  Image,
  Text,
  TextInput,
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import React from 'react';
import styles from './styles1';
import {Button1, Cards, Profil} from '../../components/index';
import {
  menu2,
  search,
  settings,
  time,
  wallet,
  user2,
} from '../../assets/icons/index';
import {x, y, z, star} from '../../assets/images/index';
import {workpp, plus, pp1, pp2, pp3, siyah, send} from '../../assets/images';

const work1 = props => {
  return (
    <SafeAreaView style={{height: winHeight * 1}}>
      <ScrollView style={{height: winHeight * 0.9}}>
        <View style={{height: winHeight * 1.2, width: winWidth * 1}}>
          <View>
            <View style={styles.button_pozition}>
              <Button1 photo={menu2} />
              <View
                style={{
                  width: winWidth * 0.83,
                  alignItems: 'flex-end',
                }}>
                <Image source={workpp} style={styles.pp_size} />
              </View>
            </View>
            <View style={styles.myCard_text_pozition}>
              <Text style={styles.myCard_text}>My Cards</Text>
            </View>
            <ScrollView
              horizontal={true}
              style={{
                height: winHeight * 0.22,
                top: winWidth * 0.05,
              }}>
              <Cards
                photo={z}
                card_name={'Balance'}
                star={star}
                no={'4563'}
                date={'24/12'}
                card_name2={'sdkaj'}
              />
              <Cards
                photo={y}
                card_name={'ayseturan'}
                star={star}
                no={'4563'}
                date={'24/12'}
                card_name2={'VİSA'}
              />
              <Cards
                photo={x}
                card_name={'Balance'}
                star={star}
                no={'4563'}
                date={'24/12'}
                card_name2={'VİSA'}
              />
            </ScrollView>
            <View style={styles.send}>
              <View>
                <Text style={styles.send_text}>Send Money to</Text>
              </View>
              <View style={{width: winWidth * 0.49, alignItems: 'flex-end'}}>
                <Text style={styles.send_text}>Search</Text>
              </View>
              <View>
                <Button1 photo={search} />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  alignItems: 'flex-end',
                  width: winWidth * 0.3,
                }}>
                <View>
                  <Image
                    source={plus}
                    style={{
                      height: winWidth * 0.11,
                      width: winWidth * 0.11,
                      position: 'absolute',
                    }}
                  />
                </View>
              </View>
              <View style={styles.photo_pozition}>
                <Image source={pp2} style={styles.photo_size} />
              </View>
              <View style={styles.photo_pozition2}>
                <Image source={pp3} style={styles.photo_size} />
              </View>
              <View style={styles.photo_pozition2}>
                <Image source={siyah} style={styles.photo_size} />
              </View>
            </View>
            <View style={styles.send_input}>
              <View>
                <Text style={styles.send_text}>Amount</Text>
              </View>
              <View style={{flexDirection: 'row', marginTop: winWidth * 0.04}}>
                <TextInput
                  style={styles.input}
                  placeholder="450.00 USD"
                  placeholderTextColor="black"></TextInput>
                <View
                  style={{width: winWidth * 0.02, marginLeft: winWidth * 0.03}}>
                  <View style={styles.send_view}>
                    <Image source={send} style={styles.send_photo} />
                  </View>
                </View>
              </View>
              <View style={{marginTop: winWidth * 0.05}}>
                <Text style={styles.send_text}>Total Sent</Text>
              </View>
              <Profil
                name={'Max William'}
                amount={'$450.00 USD'}
                date={'27 Aug 2012'}
                photo={pp1}
              />
              <Profil
                name={'Max William'}
                amount={'$450.00 USD'}
                date={'27 Aug 2012'}
                photo={pp2}
              />
              <Profil
                name={'Max William'}
                amount={'$450.00 USD'}
                date={'27/10/2012'}
                photo={pp3}
              />
              <Profil
                name={'Max William'}
                amount={'$450.00 USD'}
                date={'27/10/2012'}
                photo={pp2}
              />
              <Profil
                name={'Max William'}
                amount={'$450.00 USD'}
                date={'27/10/2012'}
                photo={pp1}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={styles.card_button}>
        <View
          style={styles.card_button_view}>
          <Button1 photo={wallet} />
          <Button1 photo={time} />
          <Button1 photo={settings} />
          <Button1 photo={user2} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default work1;
