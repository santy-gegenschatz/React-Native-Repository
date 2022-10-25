import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native' 
import {ImageSelector} from '../../components/index'
import { saveProfileImage } from '../../store/actions/index'
import { styles } from './styles'

const Profile = ({navigation}) => {
    const [image, setImage] = useState()

    const onHandlerImage = (imageUri) => {
        setImage(imageUri)
    }

    const onHandleSubmit = () => {
        saveProfileImage(image)
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> Press the button below to pick a new Profile Image </Text>
            <ImageSelector onImage = {onHandlerImage}/>
            <TouchableOpacity 
                style = {styles.saveButton}
                onPress = {onHandleSubmit}
            >
                <Text> Save Place </Text> 
            </TouchableOpacity>
            <TouchableOpacity style = {styles.logOutButton}>
                <Text> Log out </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Profile