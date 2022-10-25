import { userTypes } from "../types/index";
import * as FileSystem from 'expo-file-system'

const { SAVE_PROFILE_IMAGE } = userTypes;

export const saveProfileImage = (image) => {
    return async (dispatch) => {
        // const filename = image.split('/').pop()
        // const path = FileSystem.documentDirectory + filename
        try {
            // await FileSystem.moveAsync({
            //     from: image,
            //     to: path
            // })
            dispatch({
                type: SAVE_PROFILE_IMAGE,
                image: image
            })
        } catch (e) {
            console.log(e);
        }
    }
}