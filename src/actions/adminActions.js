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
                localStorage.setItem('admin-token', result.token)
                dispatch(startGetAdmin(result.token))
                dispatch(startGetStudents(result.token))
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

export const startUpdateAdmin = (editedData, resetForm, props) => {
    console.log(editedData)
    return (dispatch) => {
        axios.put('https://dct-e-learning.herokuapp.com/api/admin', editedData, {
            headers: {
                'Authorization' : localStorage.getItem('admin-token')
            }
        })
        .then((response) => {
            console.log(response.data)
            const result = response.data
            dispatch(editAdmin(result))
            resetForm()
            props.handleToggle()
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
}

export const editAdmin = (newData) => {
    return {
        type: 'EDIT_ADMIN',
        payload: newData
    }
}

export const startRegisterStudent = (studentData, resetForm, redirect) => {
    return (dispatch) => {
        axios.post('https://dct-e-learning.herokuapp.com/api/admin/students', studentData, {
            headers: {
                "Authorization": localStorage.getItem('admin-token')
            }
        })
        .then((response) => {
            const result = response.data
            resetForm()
            redirect()
        })
        .catch((error) => {
            console.log(error.message)
            dispatch(RegisterStudentError(error.message))
        })
    }
}

export const RegisterStudentError = (message) => {
    return {
        type: 'REGISTER_STUDENT_ERROR',
        payload: message
    }
}

export const startGetStudents = (token) => {
    return (dispatch) => {
        axios.get('https://dct-e-learning.herokuapp.com/api/admin/students', {
            headers: {
                'Authorization' : token
            }
        })
        .then((response) => {
            // console.log(response.data)
            const result = response.data
            dispatch(setStudents(result.reverse()))
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
} 

export const setStudents = (studentData) => {
    return {
        type: 'SET_STUDENTS',
        payload: studentData
    }
}

export const startUpdateStudent = (editedData, resetForm, _id, closeModal) => {
    return (dispatch) => {
        axios.put(`https://dct-e-learning.herokuapp.com/api/students/${_id}`, editedData, {
            headers: {
                "Authorization" : localStorage.getItem('admin-token')
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(editStudent(result))
            resetForm()
            closeModal()
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
}

export const editStudent = (newData) => {
    return {
        type: 'EDIT_STUDENT',
        payload: newData
    }
}

export const startDeleteStudent = (_id) => {
    return (dispatch) => {
        axios.delete(`https://dct-e-learning.herokuapp.com/api/admin/students/${_id}`, {
            headers: {
                "Authorization" : localStorage.getItem('admin-token')
            }
        })
        .then((response) => {
            const result = response.data
            dispatch(removeStudent(result._id))
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
}

export const removeStudent = (_id) => {
    return {
        type: 'REMOVE_STUDENT',
        payload: _id
    }
}