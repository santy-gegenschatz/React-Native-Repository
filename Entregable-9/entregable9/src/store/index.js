import { createStore, combineReducers, applyMiddleware} from 'redux'
import { productReducer, categoryReducer, cartReducer, ordersReducer, authReducer, userReducer} from './reducers/index'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer,
    user: userReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))