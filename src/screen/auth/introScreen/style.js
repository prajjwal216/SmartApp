import {StyleSheet} from 'react-native';
import GLOBALS from '../../../assets';
const {FONTS, COLOR} = GLOBALS;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    width: '75%',
    height: '75%',
  },
  log:{
    flex:0.6
  },
  logoView: {
    flex: 0.5,
    justifyContent: 'center',
    alignContent: 'center',
  },

  button: {
    marginHorizontal: 75,
    marginTop:70,
    borderRadius: 15,
    borderColor:'#FF4500',
    borderWidth:4,
    backgroundColor:'#FF4500',
        alignItems:'center'
   
  },
  buttonTitle: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 28,
    padding: 12,
    borderRadius: 3,
    color: 'white',
   
  },
  buttonTitle1:{
    color:'black',
    alignSelf:'center',
    marginTop:25,
    fontSize:20
  },
  heading: {
    color:'#000000',
    alignSelf: 'center',
    fontSize: 30,
    fontFamily: FONTS.NunitoBold,

  },
  headings:{
    marginHorizontal: 35,
    fontSize:20,
    alignSelf:'center'
  }
});
export default styles;