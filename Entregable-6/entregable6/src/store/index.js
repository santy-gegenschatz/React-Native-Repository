import { createStore, combineReducers, applyMiddleware} from 'redux'
import { productReducer, categoryReducer, cartReducer, ordersReducer } from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    orders: ordersReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))