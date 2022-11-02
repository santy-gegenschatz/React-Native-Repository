import { cartTypes } from "../types";
import { URL_API } from "../../constants/firebase";
import { generateDateWithMinutes } from '../../utils/dates'

const {ADD_ITEM, REMOVE_ITEM, CONFIRM_ORDER} = cartTypes

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

export const confirmCart = (items, total, userId) => {
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
                    owner: userId
                })
            })
            
            const result = await response.json()
            dispatch({
                type: CONFIRM_ORDER,
                confirm: result
            })

        } catch (e) {
            console.log(e);
        }   
    }
}