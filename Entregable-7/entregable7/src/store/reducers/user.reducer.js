import { userTypes } from '../types/index'

const { SAVE_PROFILE_IMAGE, SAVE_USER_NAME } = userTypes;

const initialState = {
    userName: null,
    userImage: null
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case SAVE_PROFILE_IMAGE:
            return ({                
                ...state,
                userImage: action.image
            })
        
        case SAVE_USER_NAME:
            return ({
                ...state,
                userName: action.username
            })
        default:
            return state
    }
}

export default userReducer
