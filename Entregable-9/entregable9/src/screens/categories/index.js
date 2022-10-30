import React, { useEffect } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { styles } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import CategoryItem from '../../components/category-item'
import { selectCategory } from '../../store/actions/index'


const Categories = ({navigation, route}) => {
    const dispatch = useDispatch()
    //
    const categories = useSelector( (state) => {
        return state.category.categories
    })

    const renderItem = ({item}) => {
        return (<CategoryItem item = {item} onSelected = {onSelected}/>)
    }

    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products')
    }

    return (
        <View style = {styles.categories__main__view}>
                <FlatList 
                    data = {categories}
                    renderItem = {renderItem}
                    keyExtractor = {item => item.id.toString()}
                    style = {styles.containerList}
                />
        </View>
    )
}

export default Categories