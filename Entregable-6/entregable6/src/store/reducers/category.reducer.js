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
            return {
                ...state,
                selected: categories.find((cat) => cat.id === action.categoryId)
            }
        
        default :
            return state
    }
}

export default categoryReducer