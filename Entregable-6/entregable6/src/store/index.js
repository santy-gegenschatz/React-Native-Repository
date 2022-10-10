import { createStore, combineReducers} from 'redux'
import { productReducer, categoryReducer } from './reducers'

const rootReducer = combineReducers({
    products: productReducer,
    category: categoryReducer
})

export default createStore(rootReducer)