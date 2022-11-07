import React from 'react'
import {KeyboardAvoidingView, Text, Button, TouchableOpacity} from 'react-native'
import { ImageSelector } from '../../components'
import { useState } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { saveProfileImage, saveUserName } from '../../store/actions/index'
import { insertPlace } from '../../db/index'

const EditProfile = ({navigation}) => {
  const [image, setImage] = useState()
  const [username, setUsername] = useState()
  const [userAddress, setUserAddress] = useState()
  const dispatch = useDispatch()

  const onHandlerImage = (imageUri) => {
    setImage(imageUri)
  }

  const onHandlerUserName = (username) => {
    setUsername(username)
  }

  const onHandlerUserAddress = (useraddress) => {
    console.log(userAddress);
    setUserAddress(useraddress)
  }

  const onHandleSubmit = () => {
    dispatch(saveProfileImage(image))
    dispatch(saveUserName(username))
    // update the database
    insertPlace('¡,1', '1',userAddress,{a:'b'})
    .then ( () => {
      navigation.navigate('Profile');
    })
    .catch( (e) => console.log(e))
    
  }

  return (

    <KeyboardAvoidingView style = {styles.containerKeyboard} behavior= {(Platform.OS === 'ios')? "padding" : null}>
        <ImageSelector onImage={onHandlerImage} onText = {onHandlerUserName} onAddress = {onHandlerUserAddress}/> 
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
