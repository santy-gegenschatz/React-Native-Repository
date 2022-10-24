import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native' 
import { styles } from './styles'

const Profile = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> Press the button below to pick a new Profile Image </Text>
            
            <View style = {styles.imageContainer} >
            </View>

            <TouchableOpacity style = {styles.chooseImageButton}> 
                <Text> Choose Image </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.logOutButton}>
                <Text> Log out </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Profile