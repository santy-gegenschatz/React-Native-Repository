import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const Header = () => {
  return (
    // Here we will return a simple view with a text
    <View style = {styles.header__view} >
        <Text style = {styles.header__title}> This is the Header of the App </Text>
    </View>
  )
}

export default Header
