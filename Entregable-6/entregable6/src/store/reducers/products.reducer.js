import { products } from "../../constants/data/products";

import { productTypes } from "../types";
const {SELECTED_PRODUCT, FILTERED_PRODUCTS} = productTypes

const initialState = {
    products: products,
    selected: null,
    filteredProducts: []
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECTED_PRODUCT:
            console.log('Selecting product');
            console.log('Action id: ', action.productId);
            console.log('Will select: ', state.products.find( (prod) => prod.id === action.productId));
            return {
                ...state,
                selected: state.products.find( (prod) => prod.id === action.productId)
            }
        case FILTERED_PRODUCTS:
            console.log('Filtering products');
            return {
                ...state,
                filteredProducts: state.products.filter( (prod) => prod.categoryId === action.categoryId)
            }
        default:
            return state
    }
}

export default productReducer