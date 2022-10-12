import { createStore, combineReducers, applyMiddleware} from 'redux'
import { productReducer, categoryReducer, cartReducer } from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer,
    cart: cartReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))