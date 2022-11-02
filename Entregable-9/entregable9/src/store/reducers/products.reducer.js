import { productTypes } from "../types";
const {SELECTED_PRODUCT, FILTERED_PRODUCTS, SET_PRODUCTS} = productTypes


const initialState = {
    products: [],
    selected: null,
    filteredProducts: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECTED_PRODUCT:
            return {
                ...state,
                selected: state.products.find( (prod) => prod.id === action.productId)
            }
        case FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: state.products.filter( (prod) => prod.categoryId === action.categoryId)
            }

        case SET_PRODUCTS:
            return {
                ...state,
                products: action.data
            }
        default:
            return state
    }
}

export default productReducer