import axios from 'axios'
import swal from 'sweetalert'

export const startRegsiterAdmin = (registerData, resetForm, redirect) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/register', registerData)
        .then((response) => {
            console.log(response.data)
            const result = response.data
            swal({
                title: result,
                button: 'Cancel'
            })
            resetForm()
            redirect()
        })
        .catch((error) => {
            console.log(error.message)
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