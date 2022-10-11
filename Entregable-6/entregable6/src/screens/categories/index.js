import React, { useEffect } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import CategoryItem from '../../components/category-item'


const Categories = ({navigation}) => {
    const categories = useSelector( (state) => {
        console.log(state.category);
        return state.category.categories
    })
    console.log(categories);
    const renderItem = ({item}) => {
        return (<CategoryItem item = {item} onSelected = {onSelected}/>)
    }

    const onSelected = () => {

    }

    const navigateToProducts = () => {
        navigation.navigate('Products')
    }

    return (
        <View style = {styles.categories__main__view}>
            <Text style = {styles.categories__text}> This is the Categories screen </Text>
                <FlatList 
                    data = {categories}
                    renderItem = {renderItem}
                    keyExtractor = {item => item.id.toString()}
                    style = {styles.containerList}
                />
            <View style = {styles.categories__button__view}>
                <Button 
                title = 'Go to Products'
                onPress={navigateToProducts}
                />
            </View>
        </View>
    )
}

export default Categories