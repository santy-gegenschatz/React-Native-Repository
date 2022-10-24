import { createStore, combineReducers, applyMiddleware} from 'redux'
import { productReducer, categoryReducer, cartReducer, ordersReducer, authReducer} from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))