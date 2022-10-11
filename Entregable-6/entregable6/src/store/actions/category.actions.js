import { categoryTypes } from "../types/index.js"

const { SELECT_CATEGORY } = categoryTypes

export const selectCategory = (id) => {({ 
    type: SELECT_CATEGORY,
    categoryID: id
})}