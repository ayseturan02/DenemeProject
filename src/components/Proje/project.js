import { View,Dimensions,Image} from 'react-native';
import React from 'react';
import styles from './styles';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const project = props => {
  const {photo,photoLeft} = props;
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View>
        <Image source={photo} style={styles.project_images} />
      </View>
      <View>
        <Image source={photoLeft} style={styles.project_images} />
      </View>
    </View>
  );
};

export default project;
