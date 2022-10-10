import { categories } from "../../constants/data/categories";

const initialState = {
    categories: categories,
    selected: null
}
console.log(categories);

const categoryReducer = (state = initialState, action) => {
    console.log(state);
    return state
}

export default categoryReducer