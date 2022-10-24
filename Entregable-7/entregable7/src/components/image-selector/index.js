import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../constants/colors'
import { styles } from './styles'

const ImageSelector = ({onImage}) => {
    const [pickedUrl, setPickedUrl] = useState()
    return (
    <View style = {styles.container}>
        <Text style = {styles.preview}>
            {!pickedUrl ?
                <Text> </Text>
            :
                <Image style = {styles.image} source = {{uri: pickedUrl}} /> 
            }
        </Text>
        <TouchableOpacity 
            style = {styles.chooseImageButton}
            onPress = {onImage}
        > 
                <Text> Choose Image </Text>
            </TouchableOpacity>
    </View>
  )
}

export default ImageSelector
