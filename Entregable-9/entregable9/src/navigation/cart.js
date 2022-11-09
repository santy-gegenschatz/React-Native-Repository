import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/cart";
import Payment from '../screens/payment/index';
import Maps from "../screens/maps";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name = 'Cart'
            component = {Cart}
            />

            <Stack.Screen
            name = 'Payment'
            component = {Payment}
            />

            <Stack.Screen
            name = 'Maps'
            component = {Maps}
            />

        </Stack.Navigator>
    )
}

export default CartNavigator