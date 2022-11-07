import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const EmptyScreenComponent = ({ navigation, message, tabname }) => {

    const onHandleGoToStore = () => {
        navigation.navigate(tabname)
    }  

 return (
    <View style = {styles.container}>
        <Text style = {styles.title}> Oops... </Text> 
        <Text style = {styles.text}> {message}</Text>
        <TouchableOpacity
            style = {styles.button}
            onPress = {onHandleGoToStore}
        >
            <Text style = {styles.buttonText}> Go to Store</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EmptyScreenComponent
