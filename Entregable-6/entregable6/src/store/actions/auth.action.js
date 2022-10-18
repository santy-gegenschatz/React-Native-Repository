import { URL_AUTH_SIGN_UP } from "../../constants/firebase";
import { authTypes } from "../types/auth.types";

const { SIGN_IN, SIGN_UP} = authTypes

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
            console.log('---');
            console.log(data);
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