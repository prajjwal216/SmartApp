import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginTop: 10,
    fontSize: 40,
    fontFamily: FONTS.NunitoBold,
    marginHorizontal: 20,
  },
  form: {
    backgroundColor: COLOR.WHITE,
    elevation: 10,
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  buttonView: {
    marginTop: 20,
  },
});

export default styles;
