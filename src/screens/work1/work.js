import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import styles from './styles';

import {
  close,
  menu,
  more,
  plus,
  user,
  bookmark,
} from '../../assets/icons/index';
import {Story, Area, Button1} from '../../components/index';
import {
  foto1,
  foto2,
  foto3,
  foto4,
  pembe,
  yellow,
  mavi,
  siyah,
} from '../../assets/images';

const work = props => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <ScrollView style={styles.Scroll}>
        <View style={styles.Screens}>
          <View style={styles.bar_container}>
            <View>
              <Text style={styles.bar_text}>UI/UX Designer</Text>
            </View>
            <View style={styles.icon_view}>
              <Image source={close} style={styles.icon} />
            </View>
          </View>
          <View style={styles.y_Screens}>
            <ScrollView horizontal={true} style={styles.Y_Scroll}>
              <View style={styles.Y_Scroll_Screens}>
                <Story
                  color={styles.Y_Images_color}
                  photo={yellow}
                  name={'Mete'}
                  control={true}
                />
                <Story
                  color={styles.P_Images_color}
                  photo={pembe}
                  name={'Bebe'}
                />
                <Story
                  color={styles.S_Images_color}
                  photo={siyah}
                  name={'Pepe'}
                />
                <Story
                  color={styles.B_Images_color}
                  photo={mavi}
                  name={'Niloya'}
                />
                <Story
                  color={styles.P_Images_color}
                  photo={pembe}
                  name={'Niloya'}
                />
                <Story
                  color={styles.B_Images_color}
                  photo={mavi}
                  name={'Bebe'}
                />
                <Story
                  color={styles.Y_Images_color}
                  photo={yellow}
                  name={'Mete'}
                />
              </View>
            </ScrollView>
          </View>
          <Area
            viewStyle={styles.body_color_1}
            photo={foto1}
            name={'JOHN DOE'}
            job={'UI/UX designer'}
            years={'23 years'}
          />
          <Area
            viewStyle={styles.body_color_2}
            photo={foto2}
            name={'MARTIN LUİS'}
            job={'UI/UX designer'}
            years={'23 years'}
          />
          <Area
            viewStyle={styles.body_color_3}
            photo={foto3}
            name={'JOHN DOE'}
            job={'UI/UX designer'}
            years={'23 years'}
          />
          <Area
            viewStyle={styles.body_color_4}
            photo={foto4}
            name={'MARİNA JOE'}
            job={'UI/UX designer'}
            years={'23 years'}
          />
          <Area
            viewStyle={styles.body_color_1}
            photo={foto1}
            name={'PEPE METE'}
            job={'UI/UX designer'}
            years={'23 years'}
          />
        </View>
      </ScrollView>
      <View>
        <View style={styles.Tab_bar}>
          <View style={styles.icon_position}>
            <Button1 photo={menu} />
            <Button1 photo={bookmark} />
            <View style={styles.plus}>
              <View>
                <Image
                  source={plus}
                  style={[styles.icon_style, {margin: 18}]}
                />
              </View>
            </View>
            <Button1 photo={user} />
            <Button1 photo={more} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default work;
