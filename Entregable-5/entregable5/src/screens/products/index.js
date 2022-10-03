import React from 'react'
import { View, Text, Button} from 'react-native'
import {styles} from './styles'

const Products = ({navigation}) => {
    const navigateToProduct = () => {
        navigation.navigate('Product')
    }

    return (
        <View style = {styles.products__main__view}>
            <Text style = {styles.products__text}> This is the Products screen </Text>
            <View style = {styles.products__button__view}>
                <Button 
                title = 'Go to Product'
                onPress={navigateToProduct}
                />
            </View>
        </View>
    )
}

export default Products