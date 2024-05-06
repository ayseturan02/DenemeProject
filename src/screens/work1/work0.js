import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import styles from './styles2';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {foto, foto5, star2} from '../../assets/images';
import {Button1} from '../../components';
import {wallet, time, settings, user2} from '../../assets/icons/index';

const work0 = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FFFFFF'}}>
      <ScrollView style={styles2.ScrollView}>
        <View style={styles2.Screens}>
          <View
            style={[
              styles.text_position,
              {justifyContent: 'space-around', alignItems: 'center'},
            ]}>
            <View>
              <Text style={styles2.text_size}>Statistic</Text>
            </View>
            <View>
              <View style={[styles2.shape, {flexDirection: 'row'}]}>
                <View style={styles2.shape_color}>
                  <View style={styles2.shape_text_position}>
                    <Text style={styles2.shape_text}>Savings</Text>
                  </View>
                </View>
                <View style={styles2.shape_text_position}>
                  <Text style={styles2.shape_text2}>Expense</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles2.history}>
            <View>
              <Text style={styles2.history_color}>Sep 2020</Text>
            </View>
            <View>
              <Text style={styles2.USD_color}>+890.00 USD</Text>
            </View>
          </View>
          <View style={styles2.y_Screens}>
            <ScrollView horizontal={true} style={styles2.y_Screens}>
              <View style={styles2.Y_Scroll_Screens}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={foto}
                    style={{height: winWidth * 0.33, width: winWidth * 1}}
                  />
                  <Image
                    source={foto}
                    style={{height: winWidth * 0.33, width: winWidth * 1}}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <Text style={styles2.number_style}>1</Text>
                  <Text style={styles2.number_style}>2</Text>
                  <Text style={styles2.number_style}>3</Text>
                  <Text style={styles2.number_style}>4</Text>
                  <Text style={styles2.number_style}>5</Text>
                  <Text style={styles2.number_style}>6</Text>
                  <Text style={styles2.number_style}>7</Text>
                  <Text style={styles2.number_style}>8</Text>
                  <Text style={styles2.number_style}>9</Text>
                  <Text style={styles2.number_style}>10</Text>
                  <Text style={styles2.number_style}>11</Text>
                  <Text style={styles2.number_style}>12</Text>
                  <Text style={styles2.number_style}>13</Text>
                  <Text style={styles2.number_style}>14</Text>
                  <Text style={styles2.number_style}>15</Text>
                  <Text style={styles2.number_style}>16</Text>
                  <Text style={styles2.number_style}>17</Text>
                  <Text style={styles2.number_style}>18</Text>
                  <Text style={styles2.number_style}>19</Text>
                  <Text style={styles2.number_style}>20</Text>
                  <Text style={styles2.number_style}>21</Text>
                </View>
              </View>
            </ScrollView>
          </View>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: winWidth * 0.7,
                alignSelf: 'flex-start',
                top: winWidth * 0.02,
              }}>
              <Text style={styles.text_target}>Target Completed 90%</Text>
            </View>
            <View style={{alignSelf: 'flex-end'}}>
              <View
                style={{
                  backgroundColor: '#F4703B',
                  height: winWidth * 0.1,
                  width: winWidth * 0.23,
                  borderRadius: winWidth * 0.02,
                }}>
                <View
                  style={{
                    height: winWidth * 0.1,
                    width: winWidth * 0.23,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: winWidth * 0.04,
                    }}>
                    View
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#FFFBF8',
              width: winWidth * 1,
              height: winWidth * 2,
            }}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <View
                style={{
                  width: winWidth * 0.7,
                  alignSelf: 'flex-start',
                  top: winWidth * 0.05,
                  marginLeft: winWidth * 0.03,
                }}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: winWidth * 0.06,
                    fontWeight: '600',
                  }}>
                  History
                </Text>
              </View>

              <View
                style={{
                  alignItems: 'flex-end',
                  flexDirection: 'row',
                  top: winWidth * 0.02,
                }}>
                <Image
                  source={star2}
                  style={{height: winHeight * 0.015, width: winWidth * 0.03}}
                />
                <Image
                  source={star2}
                  style={{height: winHeight * 0.015, width: winWidth * 0.03}}
                />
                <Image
                  source={star2}
                  style={{height: winHeight * 0.015, width: winWidth * 0.03}}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.card_button}>
        <View style={styles.card_button_view}>
          <Button1 photo={wallet} />
          <Button1 photo={time} />
          <Button1 photo={settings} />
          <Button1 photo={user2} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default work0;
