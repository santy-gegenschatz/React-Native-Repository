import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

const Header = ({title}) => {
  return (
    // Here we will return a simple view with a text
    <View style = {styles.header__view} >
        <Text style = {styles.header__title}> {title} </Text>
    </View>
  )
}

export default Header
