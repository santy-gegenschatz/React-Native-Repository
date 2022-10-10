import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'

const CategoryItem = ({item, onSelected}) => {
    console.log('Loading');
    return (
        <View style = {styles.container}>
            <TouchableOpacity
                onPress = {() => onSelected}>
                <View>
                    <Text style = {styles.title}> {item.title} 98709870</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem