import React from 'react'
import { View, Text } from 'react-native'
import {styles} from './styles'

const Product = () => {
    return (
        <View style = {styles.product__main__view}>
            <Text> This is the Product screen </Text>
        </View>
    )
}

export default Product