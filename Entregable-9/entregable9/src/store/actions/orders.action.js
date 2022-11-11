import { orderTypes } from "../types";
import { URL_API } from "../../constants/firebase";

const { GET_ORDERS, DELETE_ORDERS } = orderTypes

export const getOrders = (userId) => {
    return async (dispatch) => {
        try {   
            const response = await fetch(`${URL_API}/orders.json`, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })

            const data = await response.json()
            // The Object.keys interface gives us an array with all they keys of 
            // the data object we are receiving
            const keys = Object.keys(data)
            // Then, we can loop that array with a forEach and operate
            // Also we create some filteredOrders array which we will later pass on
            // to the reducer to update the order list
            let filteredOrders = []
            keys.forEach( (key) => {
                // We access each order
                const order = data[key]
                if (order.owner === userId) {
                    filteredOrders.push({...data[key], id: key})
                }
            })
            const orders = Object.keys(data).map(key => {
                return {
                    ...data[key],
                    id: key
                }
            })

            dispatch({
                type: GET_ORDERS,
                orders: filteredOrders
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const deleteOrder = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/orders/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })

            const result = await response.json()
            dispatch({
                type: DELETE_ORDERS,
                id
            })
        } catch (e) {
            console.log(e);
        }
    }
}