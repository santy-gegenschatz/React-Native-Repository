import { cartTypes } from "../types";
import { URL_API } from "../../constants/firebase";

const {ADD_ITEM, REMOVE_ITEM, CONFIRM_CART} = cartTypes

export const addItem = (item) => ({
    type: ADD_ITEM,
    item
})

export const removeItem = (id) => ({
    type: REMOVE_ITEM,
    id
})

export const confirmCart = (order) => {
    type: CONFIRM_CART,
    order
}