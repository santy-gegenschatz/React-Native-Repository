import React from 'react'
import { styles } from './styles'

const SecondScreen = () => {
  return (
    <>    
        <Header title = 'Second Screen'/>
        <View style = {styles.secondScreen__view}>
            <Text> This is the Second Screen of the App </Text>
        </View>
    </>
  )
}

export default SecondScreen
