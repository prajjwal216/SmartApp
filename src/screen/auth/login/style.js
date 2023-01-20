import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginView: {
    flex: 0.5,
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
    borderWidth:2,
    borderColor:'#c0c0c0',
    shadowOffset:{},
    shadowOpacity:0.7,
    elevation:20,
    marginHorizontal: 15,
    elevation: 10,
    marginVertical: 15,
    padding: 15,
    borderRadius: 20,
  },
  logo: {
    marginTop: 10,
    height:'50%',
    width: '50%',
   
  },
  heading: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 40,
    alignSelf:'center'
  },
  subHeading: {
    fontFamily: FONTS.NunitoRegular,
    fontSize: 15,
    alignSelf:'center'
  },
 

  btn: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 40,
    color: COLOR.PRIMARY,
  },
  imageView: {
    
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
  coverView:{
    flex:0.8
  },
  link: {
    color: 'black',
    alignSelf:'center',
    fontFamily: FONTS.NunitoRegular,
    fontSize: 20,
    marginBottom: 10,
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
});
export default styles;
