
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Controller } from 'react-hook-form';
import FONTS from '../assets/fonts/index';
import COLOR from '../assets/color';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';

const CustomDropdown = ({ control, name, rules = {}, placeholder, label }) => {
  const [country, setCountry] = useState('');
  const [listCountry, setlistCountry] = useState([]);
  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')

      .then(function (response) {
        setlistCountry([...response.data]);
      })

      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <Text style={styles.heading}>{label}</Text>
          <View
            style={[
              styles.container,
              { borderColor: error ? 'red' : COLOR.PRIMARY },
            ]}>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={listCountry}
              search
              maxHeight={300}
              labelField="name"
              valueField="value"
              placeholder="Select country"
              searchPlaceholder="Search..."
              value=""
              onChange={onChange}
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
  
      borderWidth: 2,
      borderRadius: 5,
  
      paddingHorizontal: 14,
      marginVertical: 5,
    },
    dropdown: {
      height: 50,
    },
    placeholderStyle: {
      fontSize: 18,
      fontFamily: FONTS.NunitoRegular,
    },
    heading: {
      marginTop: 10,
      fontFamily: FONTS.NunitoBold,
      fontSize: 18,
    },
    selectedTextStyle: {
      fontFamily: FONTS.NunitoRegular,
      fontSize: 18,
      color: COLOR.BLACK,
    },
  });
  

export default  CustomDropdown
