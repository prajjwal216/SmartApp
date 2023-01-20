import {StyleSheet, Text, View,ImageBackground} from 'react-native';
import React from 'react';
const {IMAGE} = GLOBALS;
import GLOBALS from '../../../assets';

const LeaderBoard = () => {
  return (
    <ImageBackground source={IMAGE.backImage} style={styles.container}>
    <View>
      <Text>TIMER</Text>
    </View>
    </ImageBackground>
  );
};

export default LeaderBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
