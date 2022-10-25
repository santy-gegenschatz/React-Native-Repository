import { productTypes } from '../types/' 

const {SELECTED_PRODUCT, FILTERED_PRODUCTS} = productTypes

export const selectedProduct = (id) => ({
    type: SELECTED_PRODUCT,
    productId: id
})

export const filteredProducts = (id) => ({
    type: FILTERED_PRODUCTS,
    categoryId: id
})