import { authTypes } from "../types/auth.types";

const { SIGN_IN, SIGN_UP } = authTypes;

const initialState = {
    token: null,
    userId: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            console.log('Token:', action.token);
            console.log('Id:', action.userId);
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }

        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }

        default:
            return state
    }
}

export default authReducer