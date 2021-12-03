const studentsInitialState = {
    isLoading: false,
    data: [],
    errors: {}
}

const studentsReducer = (state = studentsInitialState, action) => {
    switch(action.type) {
        case 'STUDENT_LOGIN_ERROR': {
            return {...state, errors: {...state.errors, studentLoginError: action.payload}}
        }
        default: {
            return {...state}
        }
    }
}

export default studentsReducer