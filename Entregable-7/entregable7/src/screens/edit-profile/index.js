import React from 'react'
import {View, Text, Button, TouchableOpacity} from 'react-native'
import { ImageSelector } from '../../components'
import { styles } from './styles'

const EditProfile = () => {
  return (
    <View style = {styles.container}>
        <ImageSelector /> 
        <TouchableOpacity
          style = {styles.saveChangesButton}
          onPress = {() => null} 
        >
          <Text style = {styles.buttonText}> Save changes </Text>
        </TouchableOpacity>
    </View> 
  )
}

export default EditProfile
