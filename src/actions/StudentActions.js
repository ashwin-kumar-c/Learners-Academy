import axios from 'axios'
import swal from 'sweetalert'

export const startLoginStudent = (loginData, resetForm, redirect) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/students/login', loginData)
            .then((response) => {
                const result = response.data
                if(result.hasOwnProperty('errors')) {
                    swal({
                        title: result.errors,
                        button: 'Cancel'
                    })
                } else {
                    swal({
                        title: 'Successfully logged in',
                        button: 'Cancel'
                    })
                    localStorage.setItem('student-token', result.token)
                    resetForm()
                    redirect()
                }
            })
            .catch((error) => {
                console.log(error.message)
                dispatch(studentLoginError(error.message))
            })
    }
}

export const studentLoginError = (message) => {
    return {
        type: 'STUDENT_LOGIN_ERROR',
        payload: message
    }
}