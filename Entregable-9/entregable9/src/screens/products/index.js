import React, { useEffect } from 'react'
import { View, FlatList} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { filteredProducts, selectedProduct } from '../../store/actions/index'
import ProductItem from '../../components/product-item'
import { styles } from './styles'

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