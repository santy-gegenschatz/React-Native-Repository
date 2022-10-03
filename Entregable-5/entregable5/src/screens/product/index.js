import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import {styles} from './styles'

const Product = ({navigation}) => {
    const navigateToCategories = () => {
        navigation.navigate('Categories')
    }

    const navigateToSettings = () => {
        navigation.navigate('Categories')
    }

    return (
        <View style = {styles.product__main__view}>
            <Text style = {styles.product__text}> This is the Product screen </Text>
            {/* We will create a button with a Touchable Opacity, to give it more characteristics */}
            <View style = {styles.product__button__view}>
                <TouchableOpacity style = {styles.product__touchable_button_one} onPress = {navigateToCategories}>
                    <Text> Go back to the main menu </Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.product__touchable_button_two} onPress = {navigateToSettings}>
                    <Text> Switch to a different Navigation Stack </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Product