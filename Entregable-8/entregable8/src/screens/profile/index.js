import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native' 
import { useSelector } from 'react-redux'
import {ImageSelector} from '../../components/index'
import { saveProfileImage } from '../../store/actions/index'
import { ProfileComponent } from '../../components/index'
import { styles } from './styles'

const Profile = ({navigation}) => {
    const userImage = useSelector(state => state.user.userImage)
    const userName = useSelector(state => state.user.userName)

    return (
        <View style = {styles.container}>
            <ProfileComponent imageUri = {userImage} userName = {userName} userEmail = 'john@appleseed.com'/>
            <TouchableOpacity 
                style = {styles.logOutButton}
            >
                <Text> Log out </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Profile