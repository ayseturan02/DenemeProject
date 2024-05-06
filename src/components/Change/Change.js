import {StyleSheet, Text, View,Dimensions} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {Button2, Input} from '../../components/index';

import styles from './styles';

const Change = (props) => {
    const {modalFunc} = props;
  return (
    <View style={styles.view}>
      <View style={styles.change}>
        <View style={styles.change}>
          <View style={{alignItems: 'center', marginTop: winWidth * 0.02}}>
            <View style={styles.line}></View>
            <View>
              <Text style={[styles.change_text, (marginTop = winWidth * 0.05)]}>
                Change Password
              </Text>
            </View>
            <View>
              <Input placeholder={'New Password'} />
              <Input placeholder={'Confirm Password'} />
              <Button2 modalFunc={modalFunc} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Change;
