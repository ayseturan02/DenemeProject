import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {foto1, photo1, photo3} from '../../assets/images';
import {arrowLeft, more2} from '../../assets/icons';
import {Proje} from '../../components/index';

const work2 = props => {
  return (
    <SafeAreaView style={[styles.SafeAreaView, {backgroundColor: '#F0EFEF'}]}>
      <ScrollView style={styles.Scroll}>
        <View style={styles.Screens}>
          <View style={[styles.body_color_1, styles.view2]}>
            <View style={{flexDirection: 'row'}}>
              <View style={styles.icon2_position}>
                <Image source={arrowLeft} style={styles.icon_style} />
              </View>
              <View style={styles.icon2_position}>
                <Image source={more2} style={styles.icon_style} />
              </View>
            </View>
            <View style={{alignSelf: 'center'}}>
              <Image source={foto1} style={[styles.image_size]} />
            </View>
          </View>
          <View
            style={[
              styles.biography,
              styles.biography_position,
              {alignSelf: 'center', alignItems: 'center'},
            ]}>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={[styles.biography_name, styles.S_Images_color]}>
                JOHN DOE
              </Text>
              <View>
                <View style={styles.green_point}></View>
              </View>
            </View>
            <View
              style={[
                styles.biography_text_position,
                {alignSelf: 'center', alignItems: 'center'},
              ]}>
              <Text style={styles.biography_text}>UI/UX Designer</Text>
              <Text style={styles.biography_text}>
                jksdjnf kdssndfmnds jsdfnmnsfndff dsfssf
              </Text>
              <Text style={styles.biography_text}>jksdjnf sfndff dsfssf</Text>
            </View>
            <View style={styles.biography_button}>
              <Text style={styles.biography_button_text}>FOLLOW</Text>
            </View>
            <View style={styles.line}></View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.followers}>
                  <Text style={styles.follow_text}>FOLLOWERS</Text>
                  <Text style={styles.follow_count}>25000</Text>
                </View>
                <View style={styles.line2}></View>
                <View style={styles.following}>
                  <Text style={styles.follow_text}>FOLLOWİNG</Text>
                  <Text style={styles.follow_count}>625</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.project_position, {alignSelf: 'center'}]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.project}>PROJECT</Text>
              <View style={{alignItems: 'center'}}>
                <View style={[styles.project_button]}>
                  <Text style={styles.project_button_text}>VİEW ALL</Text>
                </View>
              </View>
            </View>
            <Proje photo={photo1} photoLeft={photo3} />
            <Proje photo={photo3} photoLeft={photo1} />
            <Proje photo={photo1} photoLeft={photo3} />
           
          </View>
        </View>
      </ScrollView>

      <View style={styles.tab_button}>
        <View>
          <Text style={styles.tab_button_text}>HERE HİM</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default work2;
