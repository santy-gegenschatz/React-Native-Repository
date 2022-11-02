import { alertTypes } from '../types/index'

const { EMAIL_NOT_FOUND, INVALID_PASSWORD, CANCEL_ALERT} = alertTypes

const initialState = {
    error: false,
    message: null
}

const alertsReducer = (state = initialState, action) => {
    switch(action.type) {
        case EMAIL_NOT_FOUND:
            return {
                ...state,
                error: true,
                message: 'Sorry, we could not find a user with the given email'
            }
        case INVALID_PASSWORD:
            return {
                ...state,
                error: true,
                message: 'Sorry, the password is incorrect'
            }
        case CANCEL_ALERT:
            return {
                ...state,
                error: false,
                message: null
            }
        default:
            return state
    }
}

export default alertsReducer
