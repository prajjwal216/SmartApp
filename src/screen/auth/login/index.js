import {
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import IMAGE from '../../../assets/image/image';
import {useForm, Controller} from 'react-hook-form';
import CustomInput from '../../../components/customInput';
import CustomButton from '../../../components/customButton';
import styles from './style';
import {CommonActions} from '@react-navigation/native';
import CustomPassword from '../../../components/customPassword';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {signIn} from '../../../util/auth';
import COLOR from '../../../assets/color';

const Login = ({navigation}) => {
  const {height} = useWindowDimensions();
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PASS_REGEX = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const Admin = data => {
    if (data.email == 'Admin@gmail.com' && data.password == 'Admin@123') {
      navigation.reset({index: 1, routes: [{name: 'AdminStack'}]});
    }else {
      onSignInPressed(data);
    }
  };
  const onSignInPressed = data => {
    signIn(data.email, data.password, navigation);
  };

  return (
    <ImageBackground source={IMAGE.backImage} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{flexGrow: 1}}
        bounces={false}>
        <View style={styles.imageView}>
          <Image
            source={IMAGE.logo2}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"
          />
        </View>

        <View style={styles.coverView}>
        
        <View style={styles.loginView}>
          <Text style={styles.heading}>Login</Text>
          
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
        </View>

        {/* <View style={styles.buttonView}> */}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(Admin)}>
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableOpacity>

          <TouchableOpacity
            style={{marginTop: 15}}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Don't have account !  <Text style={{color:COLOR.PRIMARY,fontWeight:'bold' }}>Register</Text></Text>
          </TouchableOpacity>
          
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Login;
