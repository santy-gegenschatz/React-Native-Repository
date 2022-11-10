import React, { useEffect } from 'react'
import {KeyboardAvoidingView, Text, TouchableOpacity, View, TextInput} from 'react-native'
import { ImageSelector } from '../../components'
import { useState } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { saveProfileImage, saveUserName } from '../../store/actions/index'
import { insertUserData, getUserData } from '../../db/index'

const EditProfile = ({navigation}) => {
  const [image, setImage] = useState()
  const [username, setUsername] = useState()
  const [userAddress, setUserAddress] = useState()
  const dispatch = useDispatch()

  const getUserDatafromDB = async () => {
    console.log('fetching');
    try {
        const response = await getUserData()
        console.log(response);
        const position = response.rows._array.length - 1
        setUsername(response.rows._array[position].username)
        setUserAddress(response.rows._array[position].address)
    } catch (e) {
        console.log(e);
    }
  }
  useEffect( () => {
    getUserDatafromDB()
  }, [])

  const onHandlerImage = (imageUri) => {
    setImage(imageUri)
  }

  const onHandleSubmit = () => {
    console.log(username, userAddress, image);
    // In order to save it via Redux
    dispatch(saveProfileImage(image))
    dispatch(saveUserName(username))
    // In order to save it via DB
    insertUserData(username || '', image || '', userAddress || '')
    .then ( () => {
      navigation.navigate('Profile');
    })
    .catch( (e) => console.log(e))
  }
  console.log('Username:', username);
  console.log('Address:', userAddress);
  return (

    <KeyboardAvoidingView style = {styles.container} behavior= {(Platform.OS === 'ios')? "padding" : null}>
        <View style = {styles.dataContainer}>
          <ImageSelector onImage={onHandlerImage}/> 
          <View style = {styles.inputsContainer}>
            <View style = {styles.userNameContainer}>
                <Text> Username </Text>
                <TextInput 
                    style = {styles.input} 
                    placeholder = {username ? username : 'Enter your username'}
                    onEndEditing = {(e) => {
                      console.log('end:', e);
                      setUsername(e.nativeEvent.text)
                      console.log(username);
                    }}
                /> 
            </View>

            <View style = {styles.addressContainer}>
                <Text> Address </Text>
                <TextInput 
                    style = {styles.input} 
                    placeholder = {userAddress ? userAddress : 'Enter your address'}
                    onEndEditing = {(e) => setUserAddress(e.nativeEvent.text)}
                /> 
            </View>
          </View>
        </View>
        <TouchableOpacity
          style = {styles.saveChangesButton}
          onPress = {onHandleSubmit} 
        >
          <Text style = {styles.buttonText}> Save changes </Text>
        </TouchableOpacity>
    </KeyboardAvoidingView> 
  )
}

export default EditProfile
