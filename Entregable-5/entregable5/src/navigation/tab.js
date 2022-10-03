import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { IonicIcons } from '@expo/vector-icons'
import CartNavigator from "./cart";
import ShopNavigator from "./shop";
import { colors } from "../constants/colors";

const BottomTab = createBottomTabNavigator()

const Tabs = () => {
    <BottomTab.Navigator>
        <BottomTab.Screen 
            name = 'ShopTab'
            component = {ShopNavigator}
            options = {{
                title: 'shop',
                tabBarIcon: ({focused}) => {
                    <IonicIcons 
                    name = {focused ? 'home' : 'home-outline'}
                    size = {22}
                    color = {colors.primary}
                    />
                }
            }}
        />

        <BottomTab.Screen 
            name = 'OrdersTab'
            component = {OrdersNavigator}
            options = {{
                title: 'shop',
                tabBarIcon: ({focused}) => {
                    <IonicIcons 
                    name = {focused ? 'file-tray-full' : 'file-tray-full-outline'} 
                    size = {22}
                    color = {colors.primary}
                    />
                }
            }}
        />
    
        <BottomTab.Screen 
            name = 'CartTab'
            component = {CartNavigator}
            options = {{
                title: 'shop',
                tabBarIcon: <IonicIcons 
                name = {focused ? 'cart' : 'cart-outline'}
                size = {22}
                color = {colors.primary}
                />
            }}
        />
    </BottomTab.Navigator>
}

export default Tabs