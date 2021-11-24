import axios from 'axios'
import swal from 'sweetalert'

export const startRegsiterAdmin = (registerData, resetForm, redirect) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/register', registerData)
        .then((response) => {
            const result = response.data
            swal({
                title: result.notice,
                button: 'Cancel'
            })
            resetForm()
            redirect()
        })
        .catch((error) => {
            dispatch(registerError(error.message))
        })
    }
}

export const registerError = (message) => {
    return {
        type: 'REGISTER_ERROR',
        payload: message
    }
}

export const startLoginAdmin = (loginData, resetForm, redirect) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/login', loginData)
        .then((response) => {
            const result = response.data
            if(result.hasOwnProperty('errors')) {
                swal({
                    title: result.errors,
                    nutton: 'Cancel'
                })
            } else {
                swal({
                    title: 'Successfully logged in',
                    button: 'Cancel'
                })
                localStorage.setItem('token', result.token)
                dispatch(startGetAdmin(result.token))
                resetForm()
                redirect()
            }
        })
        .catch((error) => {
            console.log(error.message)
            dispatch(loginError(error.message))
        })
    }
}

export const loginError = (message) => {
    return {
        type: 'LOGIN_ERROR',
        payload: message
    }
}

export const startGetAdmin = (token) => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/account', {
            headers: {
                "Authorization": token
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(setAdmin(result))
        })
        .catch((error) => {
            dispatch(accountError(error.message))
        })
    }
}

export const setAdmin = (admin) => {
    return {
        type: 'SET_ADMIN',
        payload: admin
    }
}

export const accountError = (message) => {
    return {
        type: 'ACCOUNT_ERROR',
        payload: message
    }
}