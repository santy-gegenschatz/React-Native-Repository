import React from 'react'
import {KeyboardAvoidingView, Text, Button, TouchableOpacity} from 'react-native'
import { ImageSelector } from '../../components'
import { useState } from 'react'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import { saveProfileImage, saveUserName } from '../../store/actions/index'

const EditProfile = ({navigation}) => {
  const [image, setImage] = useState()
  const [username, setUsername] = useState()
  const dispatch = useDispatch()

  const onHandlerImage = (imageUri) => {
    setImage(imageUri)
  }

  const onHandlerUserName = (username) => {
    setUsername(username)
  }

  const onHandleSubmit = () => {
    dispatch(saveProfileImage(image))
    dispatch(saveUserName(username))
    navigation.navigate('Profile')
  }

  return (

    <KeyboardAvoidingView style = {styles.containerKeyboard} behavior= {(Platform.OS === 'ios')? "padding" : null}>
        <ImageSelector onImage={onHandlerImage} onText = {onHandlerUserName}/> 
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
