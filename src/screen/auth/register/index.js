import {
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import IMAGE from '../../../assets/image/image';
import {useForm, Controller} from 'react-hook-form';
import CustomInput from '../../../components/customInput';
import CustomButton from '../../../components/customButton';
import styles from './style';
import CustomDropdown from '../../../components/customDropdown';
import CustomPassword from '../../../components/customPassword';
import CustomRadio from '../../../components/customRadio';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {signUp} from '../../../util/auth';
import COLOR from '../../../assets/color';

const Register = ({navigation}) => {
  const {height} = useWindowDimensions();
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PASS_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const NAME_REGEX = /^[a-zA-Z ]*$/;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const onSignUpPressed = data => {
    console.log(data);
    signUp(data.email, data.password, navigation);
  };

  return (
    <ImageBackground source={IMAGE.backImage} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}>
        <View style={styles.Imageview}>
          <Image
            source={IMAGE.logo2}
            style={[styles.logo, {height: height * 0.1}]}
            resizeMode="contain"
          />
        </View>
        <View style={styles.loginView}>
          <Text style={styles.heading}>Registration</Text>
          <CustomInput
            label={'Name'}
            name="name"
            control={control}
            placeholder="Enter name"
            rules={{
              required: 'Name is required',
              minLength: {
                value: 3,
                message: 'Password should be at least 3 characters long',
              },
              pattern: {value: NAME_REGEX, message: 'Email is invalid'},
            }}
          />
          <CustomInput
            label={'Email'}
            name="email"
            control={control}
            placeholder="Enter email"
            rules={{
              required: 'Email is required',
              pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
            }}
          />
          <CustomPassword
            label={'Password'}
            name="password"
            control={control}
            placeholder="Enter password"
            secureTextEntry
            rules={{
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password should be at least 8 characters long',
              },
              pattern: {
                value: PASS_REGEX,
                message:
                  'A password must contain characters, numbers and one special character (@, $, !, &, etc).',
              },
            }}
          />
          <CustomDropdown
            control={control}
            label={'Country'}
            placeholder={'Select country'}
            name="country"
            rules={{
              required: 'Country is required',
            }}
          />
          <CustomRadio
            control={control}
            label={'Gender'}
            name="gender"
            rules={{
              required: 'Gender is required',
            }}
          />
        </View>
        <View style={styles.buttonView}>
          
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSignUpPressed)}>
          <Text style={styles.buttonTitle}>Register</Text>
        </TouchableOpacity>
         
          <TouchableOpacity
            style={{marginTop: 5}}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Already have an account? <Text style={{color:COLOR.PRIMARY,fontWeight:'bold' }}>Login</Text></Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Register;
