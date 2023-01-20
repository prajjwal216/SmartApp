import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/firestore';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';
export const signIn = (email, password, navigation) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show('Logged in', ToastAndroid.SHORT);
      navigation.reset({index: 1, routes: [{name: 'Drawer'}]});
    })
    .catch(error => {
      if (error.code === 'auth/user-not-found') {
        ToastAndroid.show("Email dosen't exists", ToastAndroid.BOTTOM);
      } else if (error.code === 'auth/wrong-password') {
        ToastAndroid.show('Incorrect password', ToastAndroid.BOTTOM);
      } else if (error.code === 'auth/too-many-requests') {
        ToastAndroid.show(
          'Too many requests. Try again later',
          ToastAndroid.BOTTOM,
        );
      }
      console.log(error);
    });
};

export const signUp = (email, password, username, country, navigation) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      return firestore().collection('users').doc(cred.user.uid).set({
        username: username,
        useremail: email,
        country: country,
        createdAt: new Date(),
      });
    })
    .then(() => {
      ToastAndroid.show('Signed up', ToastAndroid.SHORT);
      navigation.navigate('Login');
    })

    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        ToastAndroid.show(
          'That email address is already in use!',
          ToastAndroid.SHORT,
        );
      }
      console.log(error);
    });
};
