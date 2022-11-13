import React, { useEffect } from 'react'
import {KeyboardAvoidingView, Text, TouchableOpacity, View, TextInput} from 'react-native'
import { ImageSelector } from '../../components'
import { useState } from 'react'
import { styles } from './styles'
import { insertUserData, getUserData } from '../../db/index'
import { useIsFocused } from '@react-navigation/native'

const EditProfile = ({navigation}) => {
  // To detect whether it is focused or not
  const isFocused = useIsFocused()
  // Variables to keep track of changes
  const [currentImage, setCurrentImage] = useState('')
  const [currentUsername, setCurrentUsername] = useState('')
  const [currentUserAddress, setCurrentUserAddress] = useState('')
  const [newImage, setNewImage] = useState('')
  const [newUsername, setNewUsername] = useState('')
  const [newUserAddress, setNewUserAddress] = useState('')


  const getUserDatafromDB = async () => {
    try {
        const response = await getUserData()
        const position = response.rows._array.length - 1
        // We set all the states to the same value coming from the database
        // Then the actuators will change the new states
        // When ready to push to databse again, we just compare priginal vs changed
        // If different, we push the changed ones, otherwise we push the original ones
        setCurrentImage(response.rows._array[position].image)
        setNewImage(response.rows._array[position].image)
        setCurrentUsername(response.rows._array[position].username)
        setNewUsername(response.rows._array[position].username)
        setCurrentUserAddress(response.rows._array[position].address)
        setNewUserAddress(response.rows._array[position].address)
    } catch (e) {
        console.log(e);
    }
  }

  useEffect( () => {
    // When rendered, get the current data from the db
    getUserDatafromDB()
  }, [isFocused])

  const onHandlerImage = (imageUri) => {
    setNewImage(imageUri)
  }

  const onHandleSubmit = async () => {
    // if the previous is equal to the new, pass the previous
    const finalImage = currentImage === newImage ? currentImage : newImage
    const finalUsername = currentUsername === newUsername ? currentUsername : newUsername
    const finalAddress = currentUserAddress === newUserAddress ? currentUserAddress : newUserAddress

    // call database and pass three values
    await insertUserData(finalUsername, finalImage, finalAddress)
    navigation.navigate('Profile')

  }

  return (

    <KeyboardAvoidingView style = {styles.container} behavior= {(Platform.OS === 'ios')? "padding" : null}>
        <View style = {styles.dataContainer}>
          <ImageSelector onImage={onHandlerImage}/> 
          <View style = {styles.inputsContainer}>
            <View style = {styles.userNameContainer}>
                <Text> Username </Text>
                <TextInput 
                    style = {styles.input} 
                    placeholder = {currentUsername ? currentUsername : 'Enter your username'}
                    onEndEditing = {(e) => {
                      setNewUsername(e.nativeEvent.text)
                    }}
                    onChangeText = {(text) => {
                      setNewUsername(text)
                    }}
                /> 
            </View>

            <View style = {styles.addressContainer}>
                <Text> Address </Text>
                <TextInput 
                    style = {styles.input} 
                    placeholder = {currentUserAddress ? currentUserAddress : 'Enter your address'}
                    onEndEditing = {(e) => setNewUserAddress(e.nativeEvent.text)}
                    onChangeText = {(text) => {
                      setNewUserAddress(text)
                    }}
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
