import axios from 'axios'
import swal from 'sweetalert'
import jwt_decode from 'jwt-decode'

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
                    const decoded = jwt_decode(result.token)
                    dispatch(StartGetStudent(decoded._id, result.token))
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

export const StartGetStudent = (_id, token) => {
    return (dispatch) => {
        axios.get(`https://dct-e-learning.herokuapp.com/api/students/${_id}`, {
            headers: {
                "Authorization": token
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(setStudent(result))
            })
            .catch((error) => {
                console.log(error.message)
                dispatch(studentAccountError(error.message))
            })
    }
}

export const setStudent = (studentData) => {
    return {
        type: 'SET_STUDENT', 
        payload: studentData
    }
}

export const studentAccountError = (message) => {
    return {
        type: 'STUDENT_ACCOUNT_ERROR',
        payload: message
    }
}