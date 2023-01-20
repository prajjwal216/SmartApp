// import {ImageBackground, StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// import CustomButton from '../../components/customButton';
// import GLOBALS from '../../assets';
// const {FONTS, COLOR, IMAGE} = GLOBALS;

// const Quizhome = ({navigation}) => {
//   return (
//     <ImageBackground style={styles.container} source={IMAGE.admin}>
//       <View style={styles.buttonView}>
//         <CustomButton
//           text={'Add Quiz'}
//           style={styles.button}
//           onPress={() => navigation.navigate('AddQuiz')}
//         />
//       </View>
//     </ImageBackground>
//   );
// };

// export default Quizhome;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     padding: 15,
//   },
//   button: {
//     width: '60%',
//   },
//   buttonView: {
//     alignItems:'center'
//   },
// });



import { ImageBackground, StyleSheet, Text, View, FlatList } from 'react-native';

import React, { useState, useEffect } from 'react';



import CustomButton from '../../components/customButton';

import GLOBALS from '../../assets';

import moment from 'moment';

import { getQuizzes } from '../../util/dataBase';

const { FONTS, COLOR, IMAGE } = GLOBALS;



const Quizhome = ({ navigation }) => {

  const [allQuizzes, setAllQuizzes] = useState([]);

  const [refreshing, setRefreshing] = useState(false);



  const getAllQuizzes = async () => {

    setRefreshing(true);

    const quizzes = await getQuizzes();



    // Transform quiz data

    let tempQuizzes = [];

    await quizzes.docs.forEach(async quiz => {

      await tempQuizzes.push({ id: quiz.id, ...quiz.data() });

    });

    await setAllQuizzes([...tempQuizzes]);



    setRefreshing(false);

  };



  useEffect(() => {

    getAllQuizzes();

  }, []);

  var currentdate = moment().format('DD MMM YYYY ').toString();

  return (

    <ImageBackground style={styles.container} source={IMAGE.backImage}>

      <FlatList

        data={allQuizzes}

        onRefresh={getAllQuizzes}

        refreshing={refreshing}

        showsVerticalScrollIndicator={false}

        style={styles.listView}

        renderItem={({ item: quiz }) => {

          if (currentdate >= quiz.date) {

            return (

              <View style={styles.quizView}>

                <View style={styles.textView}>

                  <Text style={styles.title}>{quiz.title}</Text>

                  {quiz.description != '' ? (

                    <Text style={styles.description}>{quiz.description}</Text>

                  ) : null}
                </View>

                <View style={styles.messView}>

                  <Text style={styles.btnInactive}>Inactive</Text>

                  <Text style={{
                    fontWeight: 'bold',
                    
                    fontSize: 18,
                    marginLeft: 10
                  }}>{moment(quiz.date, 'DD MMM YYYY').format('DD MMM')}</Text>

                </View>



              </View>

            );

          } else {

            return (

              <View style={styles.quizView}>

                <View style={styles.textView}>

                  <Text style={styles.title}>{quiz.title}</Text>

                  {quiz.description != '' ? (

                    <Text style={styles.description}>{quiz.description}</Text>

                  ) : null}
                </View>

                <View style={styles.messView}>

                  <Text style={styles.btnActive}>Active</Text>

                  <Text style={{
                    fontWeight: 'bold',
                    
                    fontSize: 18,
                    marginLeft: 10
                  }}>{moment(quiz.date, 'DD MMM YYYY').format('DD MMM')}</Text>

                </View>



              </View>

            );

          }

        }}

      />

      <View style={styles.buttonView}>

        <CustomButton

          text={'Create Quiz'}

          style={styles.button}

          onPress={() => navigation.navigate('AddQuiz')}

        />

      </View>

    </ImageBackground>

  );

};



export default Quizhome;



const styles = StyleSheet.create({

  container: {

    flex: 1,

    //backgroundColor: 'pink',

    justifyContent: 'flex-end',

    padding: 10,

  },

  button: {

    width: '100%',

  },



  quizView: {
    flex: 1,

    padding: 15,

    borderRadius: 10,

    marginVertical: 5,

    marginHorizontal: 10,

    flexDirection: 'row',

    backgroundColor: COLOR.WHITE,

    elevation: 10,

  },

  textView: {

    flex: 0.6,

    paddingRight: 10,

  },

  title: {

    fontWeight: 'bold',
    color:COLOR.PRIMARY,
    fontSize: 25,

  },

  description: {

    fontFamily: FONTS.NunitoRegular,

    fontSize: 18,

  },



  btnInactive: {

    fontWeight: 'bold',
    
    fontSize: 18,
    marginLeft: 10,

    color: 'red',

  },

  btnActive: {

    fontWeight: 'bold',
    color: 'green',
    fontSize: 18,
    marginLeft: 10
  },

  messView: {
    flex: 0.3,

    borderColor: COLOR.PRIMARY,

  },

});

