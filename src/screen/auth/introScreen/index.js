
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import styles from './style';
import IMAGE from '../../../assets/image/image';
import COLOR from '../../../assets/color';
const IntroScreen = ({navigation}) => {
  return (
    <ImageBackground source={IMAGE.backImage} style={styles.content}>
      <View style={styles.logoView}>
        <Image style={styles.logo} source={IMAGE.logo2} resizeMode="contain" />
      </View>
     <View style={styles.log}>
        <Text style={styles.heading}> Hey! Welcome</Text>
        <Text style={styles.headings}> We help candidates sharpen their skills and pursue best opportunities.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonTitle}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonTitle1}>I already have an account ! <Text style={{color:COLOR.PRIMARY,fontWeight:'bold' }}>Login</Text></Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
};
export default IntroScreen;