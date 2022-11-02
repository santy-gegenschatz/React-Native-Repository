import React, { useEffect, useCallback } from 'react'
import { View, FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { filteredProducts, getProducts, selectedProduct } from '../../store/actions/index'
import ProductItem from '../../components/product-item'
import { styles } from './styles'
import { useFocusEffect } from '@react-navigation/native'

const Products = ({navigation}) => {
    const dispatch = useDispatch()
    const selectedCategory = useSelector( (state) => (state.category.selected))
    const productsFiltered = useSelector( (state) => (state.products.filteredProducts))
    const products = useSelector( (state) => (state.products.products))

    useEffect( () => {
        // dispatch(filteredProducts(selectedCategory.id))
    }, [])

    const renderItem= ({item}) => {
        return (
            <ProductItem item = {item} onSelected = {onSelected}/>
        )
    }

    const onSelected = (item) => {
        dispatch(selectedProduct(item.id))
        navigation.navigate('Product')
    }

    useFocusEffect(
        useCallback(() => {
          console.log('Dispatching1234567');
          dispatch(getProducts())
        }, [dispatch])
      )

    return (
        <View style = {styles.container}>
            <FlatList
                data = {products}
                renderItem = {renderItem}
                keyExtractor = {item => item.id.toString()}
                style = {styles.flatlist}
                >
            </FlatList>
        </View>
    )
}

export default Products