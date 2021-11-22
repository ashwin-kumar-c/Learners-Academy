import { createStore, combineReducers } from 'redux'
import adminReducer from '../reducers/adminReducer'
import studentsReducer from '../reducers/studentsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        admin: adminReducer,
        students: studentsReducer
    }))
    return store
}

export default configureStore