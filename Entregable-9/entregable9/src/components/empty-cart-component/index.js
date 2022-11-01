import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const EmptyCartComponent = ({ navigation }) => {

    const onHandleGoToStore = () => {
        navigation.navigate('ShopTab')
    }  

 return (
    <View style = {styles.container}>
        <Text style = {styles.title}> Oops... </Text> 
        <Text style = {styles.text}> It seems you cart is empty. Why dont you check our awesome products in the store ?</Text>
        <TouchableOpacity
            style = {styles.button}
            onPress = {onHandleGoToStore}
        >
            <Text style = {styles.buttonText}> Go to Store</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EmptyCartComponent
