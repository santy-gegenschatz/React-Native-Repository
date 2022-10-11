import { createStore, combineReducers, applyMiddleware} from 'redux'
import { productReducer, categoryReducer } from './reducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))