import { categories } from "../../constants/data/categories";
import { categoryTypes } from "../types";
const { SELECT_CATEGORY } = categoryTypes

const initialState = {
    categories: categories,
    selected: null
}

const categoryReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SELECT_CATEGORY :
            console.log('Reducer Categories: ', state);
            console.log('Reducer Action: ', action);
            const indexCategory = state.categories.findIndex( (cat) => cat.id === action.categoryId)
            return {
                ...state,
                selected: categories[indexCategory]
            }
        
        default :
            return state
    }
}

export default categoryReducer