import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native' 
import {ImageSelector} from '../../components/index'
import { styles } from './styles'

const Profile = ({navigation}) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> Press the button below to pick a new Profile Image </Text>
            <ImageSelector onImage = {() => null }/>
            <TouchableOpacity style = {styles.logOutButton}>
                <Text> Log out </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Profile