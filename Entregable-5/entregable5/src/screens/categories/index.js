import React from 'react'
import { View, Text, Button } from 'react-native'
import {styles} from './styles'

const Categories = ({navigation}) => {
    const navigateToProducts = () => {
        navigation.navigate('Products')
    }
    return (
        <View style = {styles.categories__main__view}>
            <Text style = {styles.categories__text}> This is the Categories screen </Text>
            <View style = {styles.categories__button__view}>
                <Button 
                title = 'Go to Products'
                onPress={navigateToProducts}
                />
            </View>
        </View>
    )
}

export default Categories