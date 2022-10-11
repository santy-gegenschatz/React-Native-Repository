import React from 'react'
import { View, Text, Button, FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {styles} from './styles'
import { products } from '../../constants/data/products'
import ProductItem from '../../components/product-item'
import { useEffect } from 'react'
import { filteredProducts } from '../../store/actions/products.action'

const Products = ({navigation}) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector( (state) => {
        console.log('Selected Category: ', state.category);
        return (state.category.selected)
    })
    
    console.log(selectedCategory);
    const productsFiltered = useSelector( (state) => {
        console.log(state.products);
        return (state.products.filteredProducts)
    })
    const navigateToProduct = () => {
        navigation.navigate('Product')
    }

    useEffect( () => {
        dispatch(filteredProducts(selectedCategory.id))
    }, [])

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