import {ImageBackground, Text, View, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import IMAGE from '../../../assets/image/image';
import styles from './style';
import CustomInput from '../../../components/customInput';
import CustomButton from '../../../components/customButton';
import {useForm, Controller} from 'react-hook-form';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {createQuestion} from '../../../util/dataBase';

const AddQuestion = ({navigation, route}) => {
  const [currentQuizId, setCurrentQuizId] = useState(
    route.params.currentQuizId,
  );
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();
  const saveQuestion = async data => {
    console.log(currentQuizId);
    let currentQuestionId = Math.floor(
      100000 + Math.random() * 9000,
    ).toString();

    // save data Question in firestore
    await createQuestion(currentQuizId, currentQuestionId, {
      question: data.question,
      correct_answer: data.correct_answer,
      incorrect_answers: [data.option2, data.option3, data.option4],
    });

    // reset value
    reset({});
    ToastAndroid.show('Question saved', ToastAndroid.BOTTOM);
  };
  return (
    <ImageBackground source={IMAGE.admin} style={styles.container}>
      <KeyboardAwareScrollView>
        <Text style={styles.heading}>Add questions</Text>
        <View style={styles.form}>
          <CustomInput
            label={'Question'}
            name="question"
            control={control}
            placeholder="Enter question"
            rules={{
              required: 'Question is required',
            }}
          />
          <CustomInput
            label={'Correct answer'}
            name="correct_answer"
            control={control}
            placeholder="Enter correct answer"
            rules={{
              required: 'Correct answer is required',
            }}
          />
          <CustomInput
            label={'Option 2'}
            name="option2"
            control={control}
            placeholder="Enter option 2 "
            rules={{
              required: 'Option 2 is required',
            }}
          />
          <CustomInput
            label={'Option 3'}
            name="option3"
            control={control}
            placeholder="Enter option 3"
            rules={{
              required: 'Option 3 is required',
            }}
          />
          <CustomInput
            label={'Option 4'}
            name="option4"
            control={control}
            placeholder="Enter option 4"
            rules={{
              required: 'Option 4 is required',
            }}
          />
          <View style={styles.buttonView}>
            <CustomButton
              text={'Save question'}
              onPress={handleSubmit(saveQuestion)}
            />
            <CustomButton
              text={'Done & Home'}
              onPress={() => {
                navigation.navigate('Quizhome');
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default AddQuestion;
