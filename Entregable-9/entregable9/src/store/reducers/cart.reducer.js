import { cartTypes } from "../types"

const { ADD_ITEM, REMOVE_ITEM, CLEAR_CART} = cartTypes

const initialState = {
    items: [],
    total: 0
}

const sumTotal = (items) => {
    return items.map( (item) => item.price * item.quantity).reduce((a, b) => a + b, 0)
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case(ADD_ITEM):
            let updatedCart = []
            const findIndex = state.items.find( (inCart) => inCart.id === action.item.id)
            if (findIndex) {
                updatedCart = state.items.map( (item) => {
                    if (item.id === action.item.id) {
                        item.quantity += 1
                    }
                    return item
                })
            } else {
                const newItem = action.item
                const final = {...newItem, quantity: 1}
                updatedCart = [...state.items, final]
            }

            const obj = {
                ...state,
                items: updatedCart,
                total: sumTotal(updatedCart)
            }
            return obj
        
        case(REMOVE_ITEM):
            const filteredCart = state.items.filter(item => item.id !== action.id)
            return {
                ...state,
                items: filteredCart,
                total: sumTotal(filteredCart)
            }

        case(CLEAR_CART):
            const object = {
                ...state,
                items: [],
                total: 0
            }
            return object
        default:
            return state
    }
}

export default cartReducer