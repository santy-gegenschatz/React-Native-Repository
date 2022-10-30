import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons';
import CartNavigator from "./cart";
import ShopNavigator from "./shop";
import OrdersNavigator from './orders'
import ProfileNavigator from './profile'
import FavouritesNavigator from "./favourites";
import { colors } from "../constants/colors";

const BottomTab = createBottomTabNavigator()

const Tabs = () => {
    return (
        <BottomTab.Navigator
            initialRouteName = "Home"
            screenOptions = {{
                headerShown: false
            }}
        >
            <BottomTab.Screen 
                name = 'ShopTab'
                component = {ShopNavigator}
                options = {{
                    title: 'Home',
                    tabBarIcon: ({focused}) => { return (<Ionicons name = 'home' color = {colors.black} size = {22} />)}
                }}
            />
    
            <BottomTab.Screen 
                name = 'OrdersTab'
                component = {OrdersNavigator}
                options = {{
                    title: 'Orders',
                    tabBarIcon: ({focused}) => { return (<Ionicons name = 'file-tray-full' color = {colors.black} size = {22} />)}
                }}
            />

            <BottomTab.Screen 
                name = 'FavouritesTab'
                component = {FavouritesNavigator}
                options = {{
                    title: 'Favourites',
                    tabBarIcon: ({focused}) => { return (<Ionicons name = 'star' color = {colors.black} size = {22} />)}
                }}
            />
        
            <BottomTab.Screen 
                name = 'CartTab'
                component = {CartNavigator}
                options = {{
                    title: 'Cart',
                    tabBarIcon: ({focused}) => { return (<Ionicons name = 'cart' color = {colors.black} size = {22} />)}
                }}
            />

            <BottomTab.Screen 
                name = 'ProfileTab'
                component = {ProfileNavigator}
                options = {{
                    title: 'Settings',
                    tabBarIcon: ({focused}) => {return (<Ionicons name = 'settings' color = {colors.black} size = {22} />)}
                }}
            />
    </BottomTab.Navigator>
    )
}

export default Tabs