import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import {styles} from './styles'

const Product = ({navigation}) => {
    const selectedProduct = useSelector( (state) => {
        console.log('Current state of products: ',state.products);
        return (state.products.selected)
    })

    console.log('Selected product: ', selectedProduct);

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> This is the Product screen </Text>
            {/* We will create a button with a Touchable Opacity, to give it more characteristics */}
            <View style = {styles.itemProperties}>
                <Text style = {styles.description}> {selectedProduct.title} </Text>
                <Text style = {styles.description}> {selectedProduct.description} </Text>
            </View>
        </View>
    )
}

export default Product