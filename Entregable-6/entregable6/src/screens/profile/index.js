import React from 'react'
import { View, Text } from 'react-native' 
import { styles } from '../auth/styles'

const Profile = () => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> This is the Profile Screen </Text>
        </View>
    )
}

export default Profile