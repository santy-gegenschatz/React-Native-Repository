import { cartTypes } from "../types";
import { URL_API } from "../../constants/firebase";
import { generateDateWithMinutes } from '../../utils/dates'

const {ADD_ITEM, REMOVE_ITEM, CONFIRM_ORDER, CLEAR_CART} = cartTypes

export const addToCart = (item) => ({
    type: ADD_ITEM,
    item
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id
})

export const confirmOrder = (order) => ({
    type: CONFIRM_ORDER,
    order
})

export const clearCart = () => ({
    type: CLEAR_CART
})

export const confirmCart = (items, total, userId, location) => {
    const date = (generateDateWithMinutes())
    return async (dispatch) => {
        try {
            const response = await fetch(`${URL_API}/orders.json`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    date,
                    items,
                    total,
                    location,
                    owner: userId
                })
            })
            
            const result = await response.json()
            // Now that the order has been succesfully posted, dispatch an action to clear the cart
            dispatch({
                type: CLEAR_CART
            })

        } catch (e) {
            console.log(e);
        }   
    }
}