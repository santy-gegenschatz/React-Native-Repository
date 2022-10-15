const initialState = {
    orders: []
}

const ordersReducer = (state = initialState, action) {
    switch(action.type) {
        case (GET_ORDERS):
            return 'a'
        case (DELETE_ORDERS):
            return 'b'
        default:
            return 'c'
    }
}

export default ordersReducer