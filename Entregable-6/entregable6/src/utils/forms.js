const formatEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const minPasswordLength = 6;

export const validateiNPUT = (name, value) => {
    let hasError = false
    let error = ''
    switch(name) {
        case 'email':
            if (value.trim() === '') {
                hasError = true
                error: `The ${name} field must be complete`
            } else if (!formatEmail(value)){
                hasError = true
                error = 'The email format is not valid'
            } else {
                hasError = false
                error = ''
            }
        case 'password':


    }
}

export const UPDATED_FORM = 'UPDATED_FORM'

export const onInputChange = (name, value, dispatch, formState) => {

}