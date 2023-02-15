
import { ScrollView } from 'react-native-gesture-handler';

import { View, Text, StatusBar, Pressable, StyleSheet, TextInput, FlatList, Image, LogBox, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useState, useEffect, Component } from 'react';
import ImageLoad from 'react-native-image-placeholder'
import COLOR from './assets/color';
import CheckBox from '@react-native-community/checkbox';
import CustomDropdown from './components/customDropdown';
import CustomInput from './components/CustomInput'
import CustomRadio from './components/customRadio';
import CustomSlider from './components/CustomSlider';
import FONTS from './assets/fonts';
import { check, PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useForm, Controller } from 'react-hook-form';
import MultiSelect from 'react-native-multiple-select';
import Slider from '@react-native-community/slider';
import RangeSlider from 'react-native-range-slider'
import { Card } from 'react-native-paper';
import axios from 'axios';

function App() {


  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    photo: '',
    name: '',
    fname: '',
    mname: '',
    dob: '',
    phone: '',
    country: '',
    gender: '',
    slider: '',
    hobby: [{
      name: '', isAdded: false
    }],
    items: '',

  })
  const [lastdate, setLastdate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');
  const [picture, setPicture] = useState({ uri: '' });
  const [file, setFilePath] = useState('');
  const [shouldShow, setShouldShow] = useState(false);
  const [isSelected, setSelection] = useState(false);
  const [apidata,setApidata]=useState()

  const Submit = (data) => {
    axios('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' }, 
      body: JSON.stringify(formData) 
    })
      .then(responseData => { 
       console.log(responseData.config.body);
        setApidata(responseData.config.body); 
        setShouldShow(!shouldShow); }).catch(error => { 
         console.error(error); 
       });

  };


  //===========Date picker==============
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setLastdate(getDate(date));
    hideDatePicker();
    setFormData(Object.assign({}, formData, { dob: date }))
    console.log(lastdate);
  };

  useEffect(() => {
    setLastdate(getDate(date));
  }, [date]);

  const getDate = date => {
    let tempDate = date.toString().split(' ');
    return date !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  };


  //==========Profile photo=========
  const handlecamerapermission = () => {

    if (checkCameraPermission) {
      openCamera()
    }
  }

  const handleGalleryPermission = () => {

    if (checkGalleryPermission) {
      openGallery()
    }
  }


  const createThreeButtonAlert = () => {
    Alert.alert(
      "Upload profile",
      "using",
      [
        {
          text: "Open Camera",
          onPress: () => handlecamerapermission()
        },
        {
          text: "Open Gallery",
          onPress: () => handleGalleryPermission()
        },
        {
          text: "Cancel",
          style: "cancel"
        }
      ]
    );
  }


  const openCamera = () => {
    const options = {
      storageoptions: {
        path: 'images',
        mediaType: 'photo'
      },
      includeBase64: true,
    }

    launchCamera(options, (res) => {
      if (res.didCancel) {
      } else if (res.errorCode) {
      } else if (res.assets[0].fileSize < 10000000) {
        setFilePath(res.assets[0]);
        setPicture({ uri: res.assets[0].uri }
        )
      } else {
        Alert.alert('Image size should be less than 10 MB')
      }
    })
  }

  const openGallery = () => {

    const options = {
      storageoptions: {
        path: 'images',
        mediaType: 'photo'
      },
      includeBase64: true,
    }
    launchImageLibrary(options, (res) => {
      if (res.didCancel) {
      } else if (res.errorCode) {
      } else if (res.assets[0].fileSize < 10000000) {
        setFilePath(res.assets[0]);
        setPicture({ uri: res.assets[0].uri }
        )
      } else {
        Alert.alert('Image size should be less than 10 MB')
      }
    })
  }

  const pictureData = (str) => {
    return str.slice((str.lastIndexOf('/') + 1))
  }
  const checkGalleryPermission = () => {
    check((Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE))
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            Alert.alert('This feature is not available on this device');
            break;
          case RESULTS.DENIED:
            request((Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE))
              .then((result) => {
                switch (result) {
                  case RESULTS.GRANTED:
                    return true;
                    break;
                }
              })
            break;
          case RESULTS.GRANTED:
            return true;
            break;
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }

  const checkCameraPermission = () => {
    check((Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA))
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            Alert.alert('This feature is not available on this device');
            break;
          case RESULTS.DENIED:
            request((Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA))
              .then((result) => {
                switch (result) {
                  case RESULTS.GRANTED:
                    return true;
                    break;
                }
              })
            break;
          case RESULTS.GRANTED:
            return true;
            break;
        }
      })
      .catch((error) => {
        console.log(error)
      });
  }




  const addData = (index, item) => {
    let temparray = formData.hobby;
    temparray[index].isAdded = true;
    temparray.push({ name: '', isadded: false });
    setFormData(Object.assign({}, formData, { hobby: temparray }));
  };

  const deleteData = (index, item) => {
    let temparray = formData.hobby; temparray = temparray.filter((varia, i) => i !== index);
    setFormData(Object.assign({}, formData, { hobby: temparray }));
  };

  const [selectedItems, setSelectedItems] = useState([]);

  const onSelectedItemsChange = (selectedItems) => {

    setSelectedItems(selectedItems);
    setFormData(Object.assign({}, formData, { techlanguages: selectedItems }))
  };
  const items = [


    { id: 5, name: 'facebook' },
    { id: 6, name: 'foursquare' },
    { id: 7, name: 'github-alt' },
    { id: 8, name: 'github' },
    { id: 9, name: 'gitlab' },
    { id: 10, name: 'instagram' },
  ];

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])


  const data = [
    { id: 1, txt: 'React Native', isChecked: false },
    { id: 2, txt: 'Javascript', isChecked: false },
    { id: 3, txt: 'Laravel', isChecked: false },
    { id: 4, txt: 'PHP', isChecked: false },

  ];

  const [products, setProducts] = React.useState(data);

  const handleChange = (id) => {
    let temp = products.map((product) => {
      if (id === product.id) {
        return { ...product, isChecked: !product.isChecked };
      }
      return product;
    });
    setProducts(temp);
  };

  let selected = products.filter((product) => product.isChecked);

  const renderFlatList = (renderData) => {
    return (
      <FlatList
        data={renderData}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }}>
            <View style={styles.card}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'space-between',
                }}>
                <Pressable onPress={() => handleChange(item.id)} >
                  <Icon
                    name={item.isChecked ? 'checkbox-outline' : 'close-outline'} size={24} color="#000" />

                </Pressable>
                <Text>{item.txt}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    );
  }


  return (
    <ScrollView>
      <View >

        <Text style={{ alignSelf: 'center', fontSize: 40, fontWeight: '500' }}>MY INFORMATION</Text>


        <View style={[styles.imageContainer]}>
          {pictureData(picture.uri) ? (
            <View>
              <TouchableOpacity onPress={createThreeButtonAlert}>
                <ImageLoad style={styles.imageloadStyle} source={picture} />
                <Image style={styles.profileiconimage} />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.profileiconStyle}>
              <TouchableOpacity onPress={createThreeButtonAlert}>
                <Icon name="person-add-outline" size={40} color={'black'} style={{ alignSelf: 'center' }} />
              </TouchableOpacity>
            </View>
          )
          }
        </View>


        <Text style={styles.heading}>Name</Text>
        <CustomInput

          placeholder='Enter Name'
          value={formData.name}
          onChangeText={(text) => {
            setFormData(Object.assign({}, formData, { name: text }))
          }}
        />
        <Text style={styles.heading}>Father's Name</Text>
        <CustomInput
          value={formData.fname}
          onChangeText={(text) => {
            setFormData(Object.assign({}, formData, { fname: text }))
          }}

          placeholder="Enter Father's Name"
        />

        <Text style={styles.heading}>Mother's Name</Text>
        <CustomInput
          placeholder="Enter Mother's Name"
          value={formData.mname}
          onChangeText={(text) => {
            setFormData(Object.assign({}, formData, { mname: text }))
          }}

        />

        <Text style={styles.heading}>Date of Birth</Text>

        <View style={{

          flexDirection: 'row',
          borderWidth: 1,
          borderColor: 'black',
          height: 40,
          borderRadius: 8,
          marginHorizontal: 20,
          fontSize: 16,
          marginTop: 5
        }}>
          <Text style={styles.textStyle}>{lastdate}</Text>

          <TouchableOpacity
            style={{ alignItems: 'flex-end', marginTop: 4, marginRight: 10, flex: 0.99 }}
            onPress={showDatePicker}>
            <Icon
              size={25}
              name="calendar-sharp"

            />

            <DateTimePicker
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}

              display={'inline'}
            />
          </TouchableOpacity>

        </View>

        <Text style={styles.heading}>Phone</Text>
        <CustomInput

          keyboardType='numeric'

          placeholder="Enter Phone"
          value={formData.phone}
          onChangeText={(text) => {
            setFormData(Object.assign({}, formData, { phone: text }))
          }}
        />

        <Text style={styles.heading}>Country</Text>
        <CustomDropdown
          placeholder={'Select country'}
          value={formData.country}
          onchange={dropdownitem => {
            console.log(dropdownitem, 'dropdown');
            setFormData(Object.assign({}, formData, { country: dropdownitem.value }),);
          }}
        />


        <View style={{ borderRadius: 8, marginHorizontal: 20, borderWidth: 1, paddingVertical: 10, marginTop: 20 }}>
          <Text style={styles.heading}>Gender</Text>
          <CustomRadio

            selectedBtn={text => {
              console.log(text, 'text');
              setFormData(Object.assign({}, formData, { gender: text.label }));
            }}
          /></View>


        <View style={{ borderRadius: 8, borderWidth: 1, paddingVertical: 10, marginTop: 30, marginHorizontal: 20 }}>
          <Text style={styles.heading}>Rate your Skills here</Text>
          <CustomSlider
            selectedBtnn={text => {
              console.log(text, 'text');
              setFormData(Object.assign({}, formData, { slider: text.label }));
            }}
          ></CustomSlider>
        </View>



        <View style={{ borderRadius: 8, borderWidth: 1, paddingVertical: 10, marginTop: 30, marginHorizontal: 20 }}>
          <FlatList
            data={formData.hobby}
            renderItem={({ item, index }) => {
              return (
                <View style={styles.page}>

                  <View style={{ flex: 0.8, flexDirection: 'row', }}>

                    <View style={{ flex: 0.6, }}>
                      <Text style={styles.medi}>Hobby {index + 1}</Text>

                      <TextInput
                        style={styles.textInput1}
                        placeholder="Enter hobby"
                        autoCapitalize="none"
                        value={item.name}
                        onChangeText={text => {
                          let custom = formData.hobby;
                          custom[index].name = text;
                          setFormData(Object.assign({}, formData, { hobby: custom }),
                          );
                        }}
                      ></TextInput>
                    </View>

                  </View>

                  <View style={{ flexDirection: 'row', paddingHorizontal: 10, marginLeft: 100, flex: 0.5, alignItems: 'flex-end' }}>



                    <View style={{ flex: 0.5, marginTop: 30 }}>
                      {formData.hobby.length === index + 1 ? (
                        <TouchableOpacity
                          style={styles.button1}
                          onPress={() => addData(index, item)}
                        >
                          <Text style={styles.medi1}>+</Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={styles.button2}
                          onPress={() => deleteData(index, item)}
                        >
                          <Text style={styles.medi1}>-</Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>

                </View>
              );
            }}
          />
        </View>


        <View style={{ borderRadius: 8, borderWidth: 1, marginTop: 20, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 20, fontWeight: '500', color: 'black', marginLeft: 20, marginTop: 10 }}>Select Company</Text>
          <MultiSelect
            items={items}
            uniqueKey="name"
            onSelectedItemsChange={onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Select Company"
            searchInputPlaceholderText="Search Company"
            submitButtonColor="green"
            submitButtonText="Submit"
            styleDropdownMenu={styles.dropdown}
            styleTextDropdown={{ fontSize: 15 }}
            styleSelectorContainer={{ marginHorizontal: 20 }}
            searchInputStyle={{ height: 40 }}
            styleItemsContainer={{ marginHorizontal: 20 }}
            tagContainerStyle={{ marginHorizontal: 20 }}
            tagRemoveIconColor="black"
            tagBorderColor="#CCC"
            tagTextColor="black"
          />

        </View>
        <View style={{ borderRadius: 8, borderWidth: 1, marginTop: 20, marginHorizontal: 20 }}>
          <Text style={styles.heading}>Languages</Text>
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              {renderFlatList(products)}
            </View>
            <Text style={styles.text}>Selected </Text>

            <StatusBar />
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Agree! Above information are correct</Text>
        </View>

        <View style={styles.buttonView}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => Submit()}

            >
            <Text style={styles.buttonTitle}>Submit</Text>
          </TouchableOpacity>
          {shouldShow ?
            (
              <Text style={{ color: 'black', marginTop: 10 }}>{JSON.stringify(formData)}</Text>
            ) : null}
        </View>



      </View>


    </ScrollView >
  )
}
const styles = StyleSheet.create({

  heading: {
    fontWeight: '800',
    fontSize: 20,
    paddingLeft: 22,
    paddingTop: 18,
    color: 'black'
  },
  headings: {
    fontWeight: '500',
    fontSize: 17,
    paddingLeft: 22,
    paddingTop: 60,
  },
  textStyle: {
    flex: 0.95,
    fontSize: 17,
    fontWeight: '500',
    marginTop: 7,
    marginLeft: 8
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    //  paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  card: {
    padding: 3,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 20,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: COLOR.PRIMARY,
    marginHorizontal: 20,
    borderRadius: 50,
    elevation: 10,
    marginTop: 50,
    height: 50
  },
  buttonTitle: {
    fontFamily: FONTS.NunitoBold,
    fontSize: 30,
    paddingTop: 5,
    alignSelf: 'center',
    borderRadius: 10,
    color: COLOR.WHITE,
  },
  imageContainer: {
    alignItems: 'center'
  },
  imageloadStyle: {
    flex: 1,
    borderRadius: 50,
    overflow: 'hidden',
    height: 100,
    width: 100,
    position: 'absolute'
  },
  profileiconStyle: {
    borderRadius: 50,
    height: 100,
    width: 100,
    marginTop: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    backgroundColor: 'lightgrey',
    justifyContent: 'center'
  },
  profileiconimage: {
    height: 30,
    width: 30,
    marginTop: 60,
    marginStart: 65
  },
  textInput: {

    padding: 7,
    margin: '2%',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 2,
    borderWidth: 1,
  },
  textInput1: {
    marginTop: 5,
    marginRight: 10,
    padding: 7,
    height: 40,
    width: '240%',
    fontSize: 16,
    fontWeight: '400',
    borderRadius: 2,
    borderWidth: 1,
  },
  view: {
    flex: 1,

  },
  main: {
    flex: 0.15,
    backgroundColor: '#0A4975',
  },
  button1: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    height: 40,
    width: 100,

  },
  button2: {

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    height: 40,
    width: 100,
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',

    alignSelf: 'center',
    marginTop: 15
  },
  page: {
    flex: 1,
    flexDirection: 'row',



  },
  medi: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'black'
  },
  medi1: {
    fontSize: 20,
    fontWeight: 'bold',

    color: 'white'
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    fontSize: 20,
    color: 'black'
  },
  buttonDisabled: {
    backgroundColor: 'green',
    borderRadius: 5,
    padding: 10,
    width: '30%',
    marginTop: 20,
    marginLeft: 80
  },

  buttonLabel: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'center'
  }
})

export default App