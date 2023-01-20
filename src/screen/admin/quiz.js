import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import CustomButton from '../../components/customButton';
import GLOBALS from '../../assets';
const {FONTS, COLOR, IMAGE} = GLOBALS;

const Quizhome = ({navigation}) => {
  return (
    <ImageBackground style={styles.container} source={IMAGE.admin}>
      <View style={styles.buttonView}>
        <CustomButton
          text={'Add Quiz'}
          style={styles.button}
          onPress={() => navigation.navigate('AddQuiz')}
        />
      </View>
    </ImageBackground>
  );
};

export default Quizhome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 15,
  },
  button: {
    width: '60%',
  },
  buttonView: {
    alignItems:'center'
  },
});
