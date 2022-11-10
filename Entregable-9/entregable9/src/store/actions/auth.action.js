import { URL_AUTH_SIGN_UP, URL_AUTH_SIGN_IN } from "../../constants/firebase";
import { authTypes } from "../types/auth.types";

const { SIGN_IN, SIGN_UP, LOG_OUT} = authTypes

export const signUp = (email, password) => {
    return async (dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_UP, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                })
            })

            if (!response.ok) {
                console.log(response);
                throw new Error ('Something went wrong')
            }

            const data = await response.json()
            dispatch({
                type: SIGN_UP,
                token: data.idToken,
                userId: data.localId,
                userEmail: email
            })
        } catch (e) {
            console.log(e);
        }
    }
}

export const signIn = (email, password) => {
    return async(dispatch) => {
        try {
            const response = await fetch(URL_AUTH_SIGN_IN, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    email, 
                    password,
                    returnSecureToken: true
                })
            })
            // Take into account that the response object returns an ok attribute
            // that might be true or false
            // We can use that to split cases and then show the user personalized messages 
            // in case something went wrong
            const data = await response.json()
            if (response.ok) {
                dispatch({
                    type: SIGN_IN,
                    token: data.idToken,
                    id: data.localId,
                    userEmail: email
                })
            } else {
                // case everything went wrong
                dispatch({
                    type: data.error.message
                })
            }

            console.log('---');
            console.log(response.ok);
            console.log(data);
        } catch (e) {
            console.log('E:', e);
        }
    }
}

export const logOut = () => ({
    type: LOG_OUT,
})