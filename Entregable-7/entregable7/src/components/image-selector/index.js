import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { useSelector } from 'react-redux'
import * as ImagePicker from 'expo-image-picker'
import { styles } from './styles'


const ImageSelector = ({onImage, onText}) => {
    const [pickedUrl, setPickedUrl] = useState()
    const username = useSelector( state => state.user.userName)

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync
        // if (status !== 'granted') {
        //     Alert.alert('You do not have the permissions to use the camera')
        //     return false
        // }
        return true
    }

    const onHandleTakePhoto = async () => {
        const hasPermission = await verifyPermissions()
        if (!hasPermission) {
            return 
        }

        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5
        })

        setPickedUrl(image.uri)
        onImage(image.uri)
    }

    return (
    <View style = {styles.container}>
        <View style = {styles.preview}>
            {!pickedUrl ?
                <Text style = {styles.warningText}> No image picked yet</Text>
            :
                <Image style = {styles.image} source = {{uri: pickedUrl}} /> 
            }
        </View>
        <TouchableOpacity 
            style = {styles.chooseImageButton}
            onPress = {onHandleTakePhoto}
        > 
                <Text> Choose Image </Text>
        </TouchableOpacity>
        <View style = {styles.userNameContainer}>
            <Text> Username </Text>
            <TextInput 
                style = {styles.input} 
                placeholder = {username ? username : 'Enter your username'}
                onChangeText = {(text) => onText(text)}
            /> 
        </View>

    </View>
  )
}

export default ImageSelector
