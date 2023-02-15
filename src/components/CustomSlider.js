import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import Slider from '@react-native-community/slider';

const CustomSlider = ({selectedBtnn}) => {
  const [value, setValues] = useState(0);
  const {register, setValue, errors} = useForm();

  return (
    <View style={{marginTop:20,width:'100%',}}>
      <Slider
        value={value}
        onValueChange={setValues}
        minimumValue={0}
        maximumValue={10}
        step={1}
        selectedBtnn={selectedBtnn}
      />
      <Text style={{textAlign:'center',color:'darkgreen',fontSize:20}}>{value}</Text>
    </View>
  );
};

export default CustomSlider;
