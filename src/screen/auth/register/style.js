import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 0,
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
    borderWidth:2,
    borderColor:'#c0c0c0',
    shadowOffset:{},
    shadowOpacity:0.7,
    elevation:20,
    marginHorizontal: 15,
    elevation: 10,
    marginHorizontal: 15,
    elevation: 10,
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
  },
  logo: {
    marginTop: 10,
    height: 100,
    width: '40%',
    alignSelf:'center',
    maxWidth: 500,
    marginLeft: 25,
  },
  heading: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 40,
    alignSelf:'center',
  },
  subHeading: {
    fontFamily: FONTS.NunitoRegular,
    fontSize: 15,
    alignSelf:'center',
  },
  button: {
    backgroundColor: COLOR.PRIMARY,
    marginHorizontal: 30,
    borderRadius: 50,
    elevation: 10,
  },
  buttonTitle: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 30,
    padding: 12,
    alignSelf:'center',
    borderRadius: 10,
    color: COLOR.WHITE,
  },
 
  btn: {
    backgroundColor: COLOR.PRIMARY,
    borderRadius: 40,
    color: COLOR.PRIMARY,
    width:"90%",
    marginLeft:20
    
  },
  Imageview: {
    flex: 1,
  },

  link: {
    color: 'black',
    fontFamily: FONTS.NunitoRegular,
    fontSize: 20,
    alignSelf:'center',
    marginBottom: 10,
  },
});
export default styles;
