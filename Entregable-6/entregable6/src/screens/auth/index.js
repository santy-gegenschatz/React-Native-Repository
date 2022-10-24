import React, { useReducer, useState } from 'react'
import { View, Text, TouchableOpacity, Button, KeyboardAvoidingView} from 'react-native'
import { useDispatch } from 'react-redux'
import { colors } from '../../constants/colors.js'
import { signIn, signUp } from '../../store/actions/index'
import { styles } from './styles.js'
import { Input } from '../../components'
import { UPDATED_FORM, onInputChange, onFocusOut } from '../../utils/forms.js'

const initialState = {
    email: {value: '', error: '', touched: false, hasError: true},
    password: {value: '', error: '', touched: false, hasError: true},
    isFormValid: false
}

const formReducer = (state, action) => {
    switch(action.type) {
        case UPDATED_FORM:
        const { name, value, hasError, error, touched, isFormValid } = action.data
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid
            }
        default:
            return state
    }
}

const Auth = ({navigation}) => {
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true)
    const [formState, dispatchFormState] = useReducer(formReducer, initialState)
    const title = isLogin ? 'Login' : 'Register'
    const message = isLogin ? 'Dont have an account yet ?' : 'Already have an account ?'
    const messageAction = isLogin ? 'Sign in' : 'Sign up'
    const messageTarget = isLogin ? 'Sign up' :'Log in'

    const onHandleChangeScreen = () => {
        setIsLogin(!isLogin)
    }

    const onHandleTextChange = (value, type) => {
        onInputChange(type, value, dispatchFormState, formState)
    } 

    const onHandleSubmit = () => {
        const { email, password } = formState
        isLogin ?
        dispatch(signIn(email.value, password.value))
        :
        dispatch(signUp(email.value, password.value))
    }

    const onHandleBlur = (value, type) => {
        console.log(value, type);
        onFocusOut(type, value, dispatchFormState, formState)
    }

    return (
        <KeyboardAvoidingView style = {styles.containerKeyboard} behavior = 'padding'>
            <View style = {styles.container} >
                    <Text style = {styles.title} > {title}</Text>

                    <Input 
                        style = {styles.input}
                        label = 'Email'
                        placeholder = 'Enter your email'    
                        value = {formState.email.value}
                        placeholderTextColor = {colors.grey} 
                        keyboardType = 'email-address'
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChange = {({nativeEvent: {text}}) => onHandleTextChange(text, 'email')}
                        hasError = {formState.email.hasError}
                        error = {formState.email.error}
                        touched = {formState.email.touched}
                        onBlur = {(e) => console.log('Hello')}
                    />

                    <Input 
                        style = {styles.input}
                        label = 'Password'
                        placeholder = 'Enter your password'
                        value = {formState.password.value}
                        placeholderTextColor = {colors.grey} 
                        secureTextEntry = {true}
                        autoCapitalize = 'none'
                        autoCorrect = {false}
                        onChange = {({nativeEvent: {text}}) => onHandleTextChange(text, 'password')}
                        hasError = {formState.password.hasError}
                        error = {formState.password.error}
                        touched = {formState.password.touched}
                        onBlur = {(e) => onHandleBlur(e.nativeEvent.text, 'password')}
                    />

                    <Button 
                        title = {messageAction}
                        color = {colors.green}
                        onPress = {onHandleSubmit}
                        disabled = {!formState.isFormValid}
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