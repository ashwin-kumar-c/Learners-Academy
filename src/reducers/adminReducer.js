const adminInitialState = {
    isLoading: false,
    adminData: {},
    studentsData: [],
    coursesData: [],
    errors: {}
}

const adminReducer = (state = adminInitialState, action) => {
    switch(action.type) {
        case 'SET_ADMIN': {
            return {...state, adminData: {...action.payload}}
        }
        case 'EDIT_ADMIN': {
            return {...state, adminData: {...state.adminData, ...action.payload}}
        }
        case 'SET_STUDENTS': {
            return {...state, studentsData: [...action.payload]}
        }
        case 'EDIT_STUDENT': {
            const result = state.studentsData.map((student) => {
                if(student._id === action.payload._id) {
                    return {...student, ...action.payload}
                } else {
                    return {...student}
                }
            })
            return {...state, studentsData: [...result]}
        }
        case 'REMOVE_STUDENT': {
            const result = state.studentsData.filter((student) => {
                return student._id !== action.payload
            })
            return {...state, studentsData: [...result]}
        }
        case 'SET_COURSES': {
            return {...state, coursesData: [...action.payload]}
        }
        case 'ADD_COURSE': {
            return {...state, coursesData: [...state.coursesData, {...action.payload}]}
        }
        case 'REGISTER_ERROR': {
            return {...state, errors: {...state.errors, register: action.payload}}
        }
        case 'LOGIN_ERROR': {
            return {...state, errors: {...state.errors, login: action.payload}}
        }
        case 'ACCOUNT_ERROR': {
            return {...state, errors: {...state.errors, account: action.payload}}
        }
        case 'REGISTER_STUDENT_ERROR': {
            return {...state, errors: {...state.errors, registerStudent: action.payload}}
        }
        case 'GET_STUDENTS_ERROR': {
            return {...state, errors: {...state.errors, getStudentsError: action.payload}}
        }
        case 'UPDATE_STUDENT_ERROR': {
            return {...state, errors: {...state.errors, updateStudentError: action.payload}}
        }
        case 'DELETE_STUDENT_ERROR': {
            return {...state, errors: {...state.errors, deleteStudentError: action.payload}}
        }
        case 'GET_COURSES_ERROR': {
            return {...state, errors: {...state.errors, getCoursesError: action.payload}}
        }
        case 'CREATE_COURSE_ERROR': {
            return {...state, errors: {...state.errors, createCourseError: action.payload}}
        }
        default: {
            return {...state}
        }
    }
}

export default adminReducer