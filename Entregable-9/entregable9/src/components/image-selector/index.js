import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { styles } from './styles'


const ImageSelector = ({onImage}) => {
    const [pickedUrl, setPickedUrl] = useState()

    const verifyPermissions = async () => {
        try {
            const { status } = await ImagePicker.requestCameraPermissionsAsync()
            if (status !== 'granted') {
                Alert.alert('You do not have the permissions to use the camera')
                return false
            }
            return true
        } catch (e) {
            console.log(e);
        }
    }

    const onHandleTakePhoto = async () => {
        try {
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
        } catch (e) {
            console.log(e);
        }
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
    </View>
  )
}

export default ImageSelector
