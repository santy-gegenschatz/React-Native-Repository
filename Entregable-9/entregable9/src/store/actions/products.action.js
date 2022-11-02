import { productTypes } from '../types/' 
import { URL_API } from '../../constants/firebase'

const {SELECTED_PRODUCT, FILTERED_PRODUCTS, SET_PRODUCTS} = productTypes

export const selectedProduct = (id) => ({
    type: SELECTED_PRODUCT,
    productId: id
})

export const filteredProducts = (id) => ({
    type: FILTERED_PRODUCTS,
    categoryId: id
})

export const getProducts = () => {
    return async(dispatch) => {
        try {
            const response = await fetch(`${URL_API}/products.json`, {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            })

            // Turn the response into a JSON
            const data = await response.json()
            console.log('Data: ', data);
            dispatch({
                type: SET_PRODUCTS,
                data
            })

        } catch (e) {
            console.log(e);
        }
    }
}