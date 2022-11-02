import { authTypes } from "../types/auth.types";

const { SIGN_IN, SIGN_UP, LOG_OUT } = authTypes;

const initialState = {
    token: null,
    userId: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {
                ...state,
                token: action.token,
                userId: action.userId
            }

        case SIGN_IN:
            return {
                ...state,
                token: action.token,
                userId: action.id
            }
        case LOG_OUT:
            return {
                ...state,
                token: null,
                userId: null
            }

        default:
            return state
    }
}

export default authReducer