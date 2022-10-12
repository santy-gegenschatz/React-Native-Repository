import { cartTypes } from "../types"

const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART} = cartTypes

const initialState = {
    items: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_ITEM):
            return ({
                
            })
        case(REMOVE_ITEM):
            return b
        case(CONFIRM_CART):
            return c
        default:
            return state
    }
    return state
}

export default cartReducer