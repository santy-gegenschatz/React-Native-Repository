import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/actions/cart.actions'
import {styles} from './styles'

const Product = ({navigation}) => {
    const dispatch = useDispatch()
    
    const selectedProduct = useSelector( (state) => {
        console.log('Current state of products: ',state.products);
        return (state.products.selected)
    })

    const addToCart = () => {
        dispatch(addToCart(selectedProduct))
        navigation.navigate('Cart')
    }
    
    return (
        <View style = {styles.container}>
            <Text style = {styles.title}> This is the Product screen </Text>
            {/* We will create a button with a Touchable Opacity, to give it more characteristics */}
            <View style = {styles.itemProperties}>
                <Text style = {styles.description}> {selectedProduct.title} </Text>
                <Text style = {styles.description}> {selectedProduct.description} </Text>
            </View>
            <Button 
                title = 'Add to cart'
                onPress = {addToCart}
                />
        </View>
    )
}

export default Product