import React from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'


const Categories = ({navigation}) => {
    const categories = useSelector( (state) => state.category.categories)

    const renderItem = ({item}) => {
        
    }

    const navigateToProducts = () => {
        navigation.navigate('Products')
    }

    return (
        <View style = {styles.categories__main__view}>
            <Text style = {styles.categories__text}> This is the Categories screen </Text>
            <View style = {styles.categories__list__view}>
                <FlatList 
                    data = {categories}
                    renderItem = {renderItem}
                    keyExtractor = {item => item.id.toString()}
                    style = {styles.containerList}
                />
            </View>
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