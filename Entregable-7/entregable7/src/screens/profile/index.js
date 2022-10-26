import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native' 
import { useSelector } from 'react-redux'
import {ImageSelector} from '../../components/index'
import { saveProfileImage } from '../../store/actions/index'
import { ProfileComponent } from '../../components/index'
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
            <ProfileComponent imageUri = '' userName = {''} userEmail = 'john@appleseed.com'/>
            <TouchableOpacity 
                style = {styles.logOutButton}
            >
                <Text> Log out </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Profile