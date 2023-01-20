import {StyleSheet, Dimensions} from 'react-native';
import { color } from 'react-native-reanimated';
import GLOBALS from '../../../assets';
const {height, width} = Dimensions.get('window');
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  quizTitle: {
    fontSize: 40,
    fontFamily: FONTS.NunitoBold,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf:'center',
    color:COLOR.PRIMARY
  },
  quizView: {
    width: width,
    height: height,

    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  questionView: {
    marginTop: 14,

    padding: 20,
    height: '60%',
    elevation: 10,
    borderRadius: 10,
    width: '90%',
    backgroundColor: COLOR.WHITE,
  },
  question: {
    fontSize: 25,
    fontFamily: FONTS.NunitoRegular,
    fontWeight: 'bold',
  },
  optionView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  option: {
    fontSize: 20,
    fontFamily: FONTS.NunitoRegular,
    padding: 5,
  },
  optionButton: {
    flexDirection: 'row',
    borderColor: COLOR.PRIMARY,
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    bottom: 30,
  },
  nextButton: {
    width: '48%',
    backgroundColor: COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonTitle: {
    fontSize: 20,
    padding: 15,
    color: COLOR.WHITE,
    fontFamily: FONTS.NunitoBold,
  },
  submitButton: {
    width: '48%',
    backgroundColor: COLOR.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
export default styles;
