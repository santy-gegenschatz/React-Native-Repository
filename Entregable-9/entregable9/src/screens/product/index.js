import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
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
            <View style = {styles.imageContainer}>
                <Text style = {styles.imageText}> Image goes here </Text>
                <Image style = {styles.image} source = ''/> 
            </View>
            <View style = {styles.infoContainer}>
                <Text style = {styles.title}> {selectedProduct.title} </Text>
                <Text style = {styles.descriptionText}> {selectedProduct.description} </Text>
                <Text style = {styles.priceText}> {selectedProduct.price} USD </Text>
                <Text style = {styles.weightText}> {selectedProduct.weight} </Text>
                {/* We will create a button with a Touchable Opacity, to give it more characteristics */}
                <TouchableOpacity
                    title = 'Add to cart'
                    onPress = {addCartItem}
                    style = {styles.addToCartButton}
                >
                    <Text> Add to cart </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Product