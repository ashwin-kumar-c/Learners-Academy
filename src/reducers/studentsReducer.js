const studentsInitialState = {
    isLoading: false,
    data: {},
    errors: {}
}

const studentsReducer = (state = studentsInitialState, action) => {
    switch(action.type) {
        case 'SET_STUDENT': {
        return {...state, data: {...action.payload}}
        }
        case 'STUDENT_LOGIN_ERROR': {
            return {...state, errors: {...state.errors, studentLoginError: action.payload}}
        }
        case 'STUDENT_ACCOUNT_ERROR': {
            return {...state, errors: {...state.errors, studentAccountError: action.payload}}
        }
        default: {
            return {...state}
        }
    }
}

export default studentsReducer