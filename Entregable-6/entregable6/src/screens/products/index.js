import React from 'react'
import { View, Text, Button, FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import {styles} from './styles'
import ProductItem from '../../components/product-item'
import { useEffect } from 'react'
import { filteredProducts, selectedProduct } from '../../store/actions/products.action'

const Products = ({navigation}) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector( (state) => {
        console.log("2, select category");
        return (state.category.selected)
    })
    
    console.log('Selected category: ' ,selectedCategory);
    const productsFiltered = useSelector( (state) => {
        console.log('4: products filtered');
        console.log('inside products filtered: ', state.products.filteredProducts);
        return (state.products.filteredProducts)
    })

    console.log('Products filtered: ' ,productsFiltered);
    const navigateToProduct = () => {
        navigation.navigate('Product')
    }

    useEffect( () => {
        console.log('1, useEffect');
        dispatch(filteredProducts(selectedCategory.id))
    }, [])

    const renderItem= ({item}) => {
        return (
            <ProductItem item = {item} onSelected = {onSelected}/>
        )
    }

    const onSelected = (item) => {
        console.log('press');
        console.log(item);
        dispatch(selectedProduct(item.id))
        console.log('Navigating');
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