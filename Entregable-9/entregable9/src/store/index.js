import { createStore, combineReducers, applyMiddleware} from 'redux'
import { productReducer, categoryReducer, cartReducer, ordersReducer, authReducer, userReducer, alertsReducer} from './reducers/index'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer,
    user: userReducer,
    alerts: alertsReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))