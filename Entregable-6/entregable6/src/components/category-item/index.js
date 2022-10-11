import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'

const CategoryItem = ({item, onSelected}) => {
    console.log('Loading');
    return (
        <View style = {{...styles.container, backgroundColor: item.color}}>
            <TouchableOpacity
                onPress = {() => {
                    console.log('press');
                    onSelected(item)}}>
                <View>
                    <Text style = {styles.title}> {item.title} </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryItem