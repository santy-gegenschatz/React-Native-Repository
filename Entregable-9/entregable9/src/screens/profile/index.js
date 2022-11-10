import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native' 
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../../store/actions/index'
import { ProfileComponent } from '../../components/index'
import { getUserData } from '../../db/index' 
import { styles } from './styles'


const Profile = ({navigation}) => {
    const dispatch = useDispatch()
    const reduxUsername = useSelector(state => state.user.userName)
    const userEmail = useSelector(state => state.auth.userEmail)
    const [username, setUserName] = useState()
    const [userImage, setUserImage] = useState()
    const [userAddress, setUserAddress] = useState()
    
    const executeLogOut = () => {
        dispatch(logOut())
    }
    // Define and get the userAddress from the database
    const getUserDatafromDB = async () => {
        console.log('fetching');
        try {
            const response = await getUserData()
            console.log(response);
            const position = response.rows._array.length - 1
            setUserName(response.rows._array[position].username)
            setUserImage(response.rows._array[position].image)
            setUserAddress(response.rows._array[position].address)
        } catch (e) {
            console.log(e);
        }
    }
    getUserDatafromDB()
    useEffect( () => {
        getUserDatafromDB()
    }, [reduxUsername])
    return (
        <View style = {styles.container}>
            <ProfileComponent imageUri = {userImage} userName = {username} userEmail = {userEmail} userAddress = {userAddress}/>
            <TouchableOpacity 
                style = {styles.logOutButton}
                onPress = {executeLogOut}
            >
                <Text> Log out </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Profile