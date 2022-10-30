import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native' 
import { useSelector } from 'react-redux'
import { ProfileComponent } from '../../components/index'
import { getPlaces } from '../../db/index' 
import { styles } from './styles'

const Profile = ({navigation}) => {
    const userImage = useSelector(state => state.user.userImage)
    const userName = useSelector(state => state.user.userName)
    const [userAddress, setUserAddress] = useState()
    // Define and get the userAddress from the database
    const getAddressFromDB = () => {
        getPlaces()
        .then ( (r) => {
            console.log('Addresses:', r);
            const last = r.rows._array.length - 1
            setUserAddress(r.rows._array[last].address)
        })
    }
    getAddressFromDB()
    return (
        <View style = {styles.container}>
            <ProfileComponent imageUri = {userImage} userName = {userName} userEmail = 'john@appleseed.com' userAddress = {userAddress}/>
            <TouchableOpacity 
                style = {styles.logOutButton}
            >
                <Text> Log out </Text> 
            </TouchableOpacity>
        </View>
    )
}

export default Profile