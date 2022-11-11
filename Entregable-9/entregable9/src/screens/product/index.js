import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import {ProductImage, StatusIndicator} from '../../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/actions/index.js'
import { insertFavourite } from '../../db'
import { styles } from './styles'

const Product = ({navigation}) => {
    const dispatch = useDispatch()
    
    const selectedProduct = useSelector( (state) => { return state.products.selected})

    const addCartItem = () => {
        dispatch(addToCart(selectedProduct))
        navigation.navigate('CartTab')
    }

    const addToFavourites = async () => {
        try {
            await insertFavourite(selectedProduct.id, selectedProduct.categoryId, selectedProduct.title, selectedProduct.description, selectedProduct.price, selectedProduct.status, selectedProduct.url)
        } catch (e) {
            console.log(e);
        }
        navigation.navigate('FavouritesTab')
    }
    
    return (
        <View style = {styles.container}>
            <View style = {styles.imageContainer}>
                <ProductImage url = {selectedProduct.url}/>
            </View>
            <View style = {styles.infoContainer}>
                <View>
                    <StatusIndicator text = 'New'/>
                    <View style = {styles.headerContainer}>
                        <Text style = {styles.title}> {selectedProduct.title} </Text>
                        <Text style = {styles.priceText}> {selectedProduct.price} USD </Text>
                    </View>
                        <Text style = {styles.descriptionText}> {selectedProduct.description} </Text>
                </View>
                <View style = {styles.buttonContainer}>
                    {/* We will create a button with a Touchable Opacity, to give it more characteristics */}
                    <TouchableOpacity
                        title = 'Add to cart'
                        onPress = {addCartItem}
                        style = {styles.addToCartButton}
                    >
                        <Text style = {styles.buttonText}> Add to cart </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        title = 'Add to Favourites'
                        onPress = {addToFavourites}
                        style = {styles.addToFavouritesButton}
                    >
                        <Text style = {styles.buttonText}> Add to Favourites </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default Product