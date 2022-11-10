import React from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './styles'

const ProfileComponent = ({imageUri, userName, userEmail, userAddress}) => {
    return (
        <View style = {styles.container} >
            <View style = {styles.imageContainer}> 
                { imageUri? 
                <Image style = {styles.image} source = {{uri: imageUri}} />
                :
                <Text style = {styles.imageText}> User image not selected. Select the edit button to modify it</Text>
                }
            </View>
            <View style = {styles.textContainer}>
                <Text style = {styles.emailText}> {userEmail} </Text>
                <Text style = {styles.userNameText} > {userName ? userName : 'Username not selected yet'}</Text>
                <Text style = {styles.addressText}> {userAddress ? userAddress : 'No address selected yet'} </Text>
            </View>
        </View>
    )
}

export default ProfileComponent