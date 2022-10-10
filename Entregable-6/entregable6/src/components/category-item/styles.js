import React from 'react'
import { View, Text } from 'react-native'

const CategoryItem = ({item}) => {

    return (
        <View>
            <Text> {item.title} </Text>
        </View>
    )
}

export default CategoryItem