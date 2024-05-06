import {SafeAreaView, Text, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {ppman} from '../../assets/images/index';
import {
  Ayarlar,
  Bottom,
  Person,
  Warning,
  Change,
} from '../../components/index';

import styles from './styles3';

import {
  upLoading,
  rightArrow,
  things,
  heart,
  padlock,
  question,
  ringing,
  user4,
  settings2,
  home,
} from '../../assets/icons';
import ModalComp from '../../components/Modal/ModalComp';

const work3 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView>
      <View
        style={{
          width: winWidth * 0.95,
          alignSelf: 'center',
        }}>
        <View style={{marginTop: winWidth * 0.05}}>
          <Text style={styles.settings_style}>Settings</Text>
        </View>
        <Person
          profil={ppman}
          text={'welcome'}
          name={'Mr. John Doe'}
          icon={upLoading}
        />

        <View style={[styles.line, {marginTop: winWidth * 0.08}]}></View>
        <Ayarlar name={'User Profile'} icon={user4} ok={rightArrow} />
        <View style={styles.line}></View>
        <Ayarlar
          name={'Change Password'}
          icon={padlock}
          ok={rightArrow}
          onPressFunc={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <View style={styles.line}></View>
        <Ayarlar name={'FAQs'} icon={question} ok={rightArrow} />
        <View style={styles.line}></View>
        <Ayarlar name={'Push Notification'} icon={ringing} ok={rightArrow} />
        <View style={styles.line}></View>

        <Warning
          text={'If you have any other query you'}
          text1={'can reach out to us'}
          link={'Whatsapp Up'}
        />
      </View>
      <View
        style={[
          {justifyContent: 'space-around', flexDirection: 'row'},
          styles.bottom_view,
        ]}>
        <Bottom icon={home} name={'Home'} />
        <Bottom icon={things} name={'Things'} />
        <Bottom icon={heart} name={'Favorites'} />
        <Bottom icon={settings2} name={'Settings'} />
      </View>

      <ModalComp modalVisible={modalVisible}>
        <Change
          modalFunc={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </ModalComp>
    </SafeAreaView>
  );
};

export default work3;
