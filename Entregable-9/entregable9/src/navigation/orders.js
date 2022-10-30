import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/orders";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name = 'Orders'
            component = {Orders}
            />
        </Stack.Navigator>
    )
}

export default OrdersNavigator