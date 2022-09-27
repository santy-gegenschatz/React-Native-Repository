import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {styles} from './styles'

const Product = ({navigation}) => {
    const navigateToSettings = () => {
        navigation.navigate('Categories')
    }

    return (
        <View style = {styles.product__main__view}>
            <Text style = {styles.product__text}> This is the Product screen </Text>
            {/* We will create a button with a Touchable Opacity, to give it more characteristics */}
            <View>
                <TouchableOpacity style = {styles.product__touchable_button} onPress = {navigateToSettings}>
                    <Text> Go back to the main menu </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product