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
                userId: data.localId
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

            if (!response.ok) {
                console.log(response);
                throw new Error ('Something went wrong')
            }

            const data = await response.json()
            console.log('---');
            console.log(data);
            console.log('---');
            console.log('Result: ', data.idToken, data.localId);
            dispatch({
                type: SIGN_IN,
                token: data.idToken,
                id: data.localId
            })

        } catch (e) {
            console.log(e);
        }
    }
}

export const logOut = () => ({
    type: LOG_OUT,
})