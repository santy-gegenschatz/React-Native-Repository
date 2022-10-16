import { orderTypes } from "../types"

const {GET_ORDERS, DELETE_ORDERS} = orderTypes

const initialState = {
    list: []
}

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ORDERS:
            return {
                ...state,
                list: action.orders
            }
        default:
            return state
    }
}

export default ordersReducer