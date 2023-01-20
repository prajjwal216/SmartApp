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
   alignSelf:'center',
   marginTop:10
  },
  form: {
    backgroundColor: COLOR.WHITE,
    borderWidth:2,
    borderColor:'#c0c0c0',
    shadowOffset:{},
    shadowOpacity:0.7,
    elevation:20,
   
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    marginHorizontal: 15,
  },
  buttonView: {
    marginTop: 20,
  },
  container1:{
    
  },
  container1:{
    backgroundColor: COLOR.WHITE,
    width: '100%',

    borderWidth: 2,
    borderRadius: 5,
    borderColor:COLOR.PRIMARY,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  heading1:{
    fontSize: 18,
    marginTop:8,
    fontFamily: FONTS.NunitoBold,
  },
  calendarView:{
    
    alignItems:'flex-end'
   
  }
});
export default styles;
