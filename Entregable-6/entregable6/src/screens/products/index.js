import React from 'react'
import { View, Text, Button, FlatList} from 'react-native'
import { useSelector } from 'react-redux'
import {styles} from './styles'
import { products } from '../../constants/data/products'
import ProductItem from '../../components/product-item'

const Products = ({navigation, name}) => {
    console.log(name);
    const selectedCategory = useSelector( (state) => {
        console.log(state.category);
        return (state.category.selected)
    })
    
    console.log(selectedCategory);
    const productsFiltered = products.filter( (prod) => prod.categoryId === 1)
    const navigateToProduct = () => {
        navigation.navigate('Product')
    }

    const renderItem= ({item}) => {
        return (
            <ProductItem item = {item} onSelected = {onSelected}/>
        )
    }

    const onSelected = (item) => {
        navigation.navigate('Product')
    }

    return (
        <View style = {styles.products__main__view}>
            <Text style = {styles.products__text}> This is the Products screen </Text>
            <FlatList
                data = {productsFiltered}
                renderItem = {renderItem}
                keyExtractor = {item => item.id.toString()}
                style = {styles.flatlist}
                >
            </FlatList>
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