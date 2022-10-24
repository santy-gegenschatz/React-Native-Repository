import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/actions/cart.actions'
import {styles} from './styles'

const Product = ({navigation}) => {
    const dispatch = useDispatch()
    
    const selectedProduct = useSelector( (state) => { return (state.products.selected)})

    const addCartItem = () => {
        dispatch(addToCart(selectedProduct))
        navigation.navigate('CartTab')
    }
    
    return (
        <View style = {styles.container}>
            {/* We will create a button with a Touchable Opacity, to give it more characteristics */}
            <View style = {styles.itemContainer}>
                <Text style = {styles.description}> {selectedProduct.title} </Text>
                <Text style = {styles.description}> {selectedProduct.description} </Text>
            </View>
            <Button 
                title = 'Add to cart'
                onPress = {addCartItem}
                />
        </View>
    )
}

export default Product