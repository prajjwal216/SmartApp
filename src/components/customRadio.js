import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Controller} from 'react-hook-form';
import FONTS from '../assets/fonts/index';
import RadioButtonRN from 'radio-buttons-react-native';
import COLOR from '../assets/color';
import Icon from 'react-native-vector-icons/Ionicons';
const data = [
  {
    label: 'Male',
  },
  {
    label: 'Female',
  },
];

const CustomRadio = ({control, name, rules = {}, label}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <Text style={styles.heading}>{label}</Text>
          <View
            style={[
              styles.container,
              {borderColor: error ? 'red' : COLOR.WHITE},
            ]}>
            <RadioButtonRN
              boxStyle={styles.box}
              style={styles.radio}
              textStyle={styles.text}
              data={data}
              selectedBtn={onChange}
              icon={
                <Icon
                  name="radio-button-on-outline"
                  size={25}
                  color="#2c9dd1"
                />
              }
            />
          </View>
          {error && (
            <Text
              style={{
                color: 'red',
                alignSelf: 'stretch',
                fontFamily: FONTS.NunitoRegular,
              }}>
              {error.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  radio: {
    flex: 1,
    //backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 18,
    fontFamily: FONTS.NunitoRegular,
  },
  heading: {
    marginTop: 10,
    fontFamily: FONTS.NunitoBold,
    fontSize: 18,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLOR.WHITE,
    height: 40,
    width: 200,
  },
  text: {
    fontSize: 18,
    height: 40,
    top: 11,
    marginLeft: 10,
    fontFamily: FONTS.NunitoRegular,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomRadio;
