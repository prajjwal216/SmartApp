
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FONTS from '../assets/fonts/index';
import COLOR from '../assets/color';
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';


const CustomDropdown = ({ control,
  name, rules = {},
  placeholder, label,
  onchange, }) => {
  const [country, setCountry] = useState('');
  const [listCountry, setlistCountry] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v2/all')
    .then(function (response) {
      setlistCountry([...response.data]);
    })
    .catch(function (error) {
      console.log(error);
    });
  }, []);


  return (<View style={styles.container}>
    <Text style={styles.heading}>{label}</Text>
    <Dropdown style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle} data={listCountry}
      search maxHeight={300}
      labelField="name"
      valueField="value"
      placeholder="Select country"
      searchPlaceholder="Search..."
      value=""
      onChange={onchange} />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    width: '90%',

    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 14,
    paddingVertical:10,
    marginVertical: 5,
    marginLeft: 20
  },
  dropdown: {
    height: 20,
  },
  placeholderStyle: {
    fontSize: 18,

  },
  heading: {
    marginTop: 0,

    fontSize: 18,
  },
  selectedTextStyle: {

    fontSize: 18,
    color: COLOR.BLACK,
  },
});


export default CustomDropdown
