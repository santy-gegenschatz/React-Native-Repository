import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

const Payment = () => {
  return (
    <View style = {styles.container}>
        
        <View style = {orderDetailsView}>
            <Text> Price & Quantity </Text>
        </View>
        
        <View>
            <Text style = {confirmText}> Confirm ?</Text>
        </View>
        <View style = {buttonsView}>
            <TouchableOpacity style = {negativeButton} >
                <Text> No </Text>
            </TouchableOpacity>

            <TouchableOpacity style = {positiveButton} >
                <Text> Yes </Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
