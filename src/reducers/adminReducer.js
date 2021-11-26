const adminInitialState = {
    isLoading: false,
    adminData: {},
    studentsData: [],
    errors: {}
}

const adminReducer = (state = adminInitialState, action) => {
    switch(action.type) {
        case 'SET_ADMIN' : {
            return {...state, adminData: {...action.payload}}
        }
        case 'EDIT_ADMIN' : {
            return {...state, adminData: {...state.adminData, ...action.payload}}
        }
        case 'SET_STUDENTS' : {
            return {...state, studentsData: [...action.payload]}
        }
        case 'REGISTER_ERROR' : {
            return {...state, errors: {...state.errors, register: action.payload}}
        }
        case 'LOGIN_ERROR' : {
            return {...state, errors: {...state.errors, login: action.payload}}
        }
        case 'ACCOUNT_ERROR' : {
            return {...state, errors: {...state.errors, account: action.payload}}
        }
        case 'REGISTER_STUDENT_ERROR' : {
            return {...state, errors: {...state.errors, registerStudent: action.payload}}
        }
        default: {
            return {...state}
        }
    }
}

export default adminReducer