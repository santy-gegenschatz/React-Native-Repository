import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native' 
import { useSelector } from 'react-redux'
import {ImageSelector} from '../../components/index'
import { saveProfileImage } from '../../store/actions/index'
import { styles } from './styles'

const Profile = ({navigation}) => {
    const [image, setImage] = useState()
    const currentImage = useSelector(state => state.user.userImage)

    const onHandlerImage = (imageUri) => {
        setImage(imageUri)
    }

    const onHandleSubmit = () => {
        saveProfileImage(image)
        console.warn(currentImage);
    }

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> Press the button below to pick a new Profile Image </Text>
            <ImageSelector onImage = {onHandlerImage}/>
            <TouchableOpacity 
                style = {styles.saveImageButton}
                onPress = {onHandleSubmit}
            >
                <Text> Save Image </Text> 
            </TouchableOpacity>

            <TouchableOpacity 
                style = {styles.logOutButton}
            >
                <Text> Log out </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Profile