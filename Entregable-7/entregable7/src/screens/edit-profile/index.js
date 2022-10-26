import React from 'react'
import {View, Text, Button} from 'react-native'
import { ImageSelector } from '../../components'
import { styles } from './styles'

const EditProfile = () => {
  return (
    <View style = {styles.container}>
        <Text>
            The Edit profile screen
        </Text>

        <ImageSelector /> 
        <Button 
            title = 'Save Changes' />
    </View> 
  )
}

export default EditProfile
