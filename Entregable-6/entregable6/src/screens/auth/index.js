import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Button, TextInput, KeyboardAvoidingView} from 'react-native'
import { useDispatch } from 'react-redux'
import { colors } from '../../constants/colors.js'
import { signUp } from '../../store/actions/index'
import { styles } from './styles.js'
import { Input } from '../../components'

const Auth = ({navigation}) => {
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const title = isLogin ? 'Login' : 'Register'
    const message = isLogin ? 'Dont have an account yet ?' : 'Already have an account ?'
    const messageAction = isLogin ? 'Sign in' : 'Sign up'
    const messageTarget = isLogin ? 'Sign up' :'Log in'

    const onHandleChangeScreen = () => {
        setIsLogin(!isLogin)
    }

    const onHandleSubmit = () => {
        dispatch(signUp(email, password))
        console.warn(email, password)
    }


    return (
        <KeyboardAvoidingView style = {styles.containerKeyboard} behavior = 'padding'>
            <View style = {styles.container} >
                    <Text style = {styles.title} > {title}</Text>

                    <Input 
                        style = {styles.input}
                        label = 'Email'
                        placeholder = 'Enter your email'    
                        value = {email}
                        placeholderTextColor = {colors.grey} 
                        keyboardType = 'email-address'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChange = {({nativeEvent: {text}}) => setEmail(text)}
                    />

                    <Input 
                        style = {styles.input}
                        label = 'password'
                        placeholder = 'Enter your password'
                        value = {password}
                        placeholderTextColor = {colors.grey} 
                        secureTextEntry = {true}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChange = {({nativeEvent: {text}}) => setPassword(text)}
                    />

                    <Button 
                        title = {messageAction}
                        color = {colors.green}
                        onPress = {onHandleSubmit}
                        disabled = {!email || !password}
                        />
                    
                    <View style = {styles.prompt}>
                        <Text style = {styles.promptMessage}> {message} </Text>
                        <TouchableOpacity
                            onPress = {onHandleChangeScreen}
                            style = {styles.promptAction}>
                                <Text style = {styles.promptText}> {messageTarget} </Text>
                        </TouchableOpacity>
                    </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth