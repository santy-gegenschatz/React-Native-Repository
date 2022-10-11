import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/cart";
import Payment from '../screens/payment/index';

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

        </Stack.Navigator>
    )
}

export default CartNavigator