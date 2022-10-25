import { userTypes } from '../types/index'

const { SAVE_PROFILE_IMAGE } = userTypes;

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
        default:
            return state
    }
}

export default userReducer
