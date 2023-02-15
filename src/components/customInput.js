import React from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

import FONTS from '../assets/fonts/index';
import COLOR from '../assets/color';

export default function CustomInput({
  placeholder,
  label,
  onChange,
  onChangeText,
  value,
  secureTextEntry,
  autoCaps,
  editable,
  keyboardType,
  maxLength,
  editablestyle,
  type,
  textInputStyle,
}) {
  return (
    <View style={styles.mainstyle}>
      <Text style={styles.labelstyle}>{label} </Text>
      <TextInput
        style={[styles.inputstyle, textInputStyle, editablestyle]}
        placeholder={placeholder}
        onChange={onChange}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCapitalize={autoCaps}
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  mainstyle: {
    marginHorizontal: 20,
  },
  inputstyle: {
    borderWidth: 1,
    borderColor: 'black',
    height: 40,
    borderRadius: 8,
    paddingLeft: 8,
    fontSize: 16,
  },
  labelstyle: {
    color: 'lightgrey',
    fontSize: 18,
   // fontFamily: FONTS.REGULAR,
    marginTop: -18,
    fontWeight: '400',
    fontStyle: 'normal',
  },
});




// import React from 'react';
// import {View, Text, TextInput, StyleSheet} from 'react-native';
// import {Controller} from 'react-hook-form';

// const CustomInput = ({
//   control,
//   name,
//   rules = {},
//   placeholder,
//   secureTextEntry,
//   label,
//   key,
//   keyboardType,
// }) => {
//   return (
//     <Controller
//       control={control}
//       name={name}
//       rules={rules}
//       render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
//         <>
//           <Text style={styles.heading}>{label}</Text>
//           <View
//             style={[styles.container, {borderColor: error ? 'red' : 'black'}]}>
//             <TextInput
//               value={value}
//               key={key}
//               onChangeText={onChange}
//               onBlur={onBlur}
//               placeholder={placeholder}
//               style={styles.input}
//               keyboardType={keyboardType}
//               secureTextEntry={secureTextEntry}
//             />
//           </View>
//           {error && (
//             <Text
//               style={{
//                 color: 'red',
//                 alignSelf: 'stretch',
//               }}>
//               {error.message || 'Error'}
//             </Text>
//           )}
//         </>
//       )}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     width: '100%',
//     justifyContent: 'center',
//     borderWidth: 1,
//     borderRadius: 5,
//     height: 40,
//     alignSelf: 'flex-start',
//     paddingHorizontal: 5,
//     marginVertical: 5,
//   },
//   input: {
//     //backgroundColor: 'red',
//     fontSize: 18,
//     height: 60,
//   },
//   heading: {
//     marginTop: 10,

//     fontSize: 18,
//   },
// });

// export default CustomInput;

