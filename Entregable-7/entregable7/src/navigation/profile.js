import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TouchableOpacity, Text} from 'react-native'
import { colors } from '../constants/colors';
import Profile from '../screens/profile'
import EditProfile from '../screens/edit-profile'

const Stack = createNativeStackNavigator()

const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = 'Profile'
                component = {Profile}
                options={({ navigation }) => ({
                    title: "Profile",
                    headerRight: () => (
                      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                        <Text style = {{color: colors.blue}}> Edit </Text>
                      </TouchableOpacity>
                    ),
                  })}
            />

            <Stack.Screen 
                name = 'EditProfile'
                component = {EditProfile}
                options = {
                    {title: 'Edit Profile'}
                }
            />
        </Stack.Navigator>
    )
}

export default ProfileNavigator