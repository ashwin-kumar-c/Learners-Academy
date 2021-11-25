import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import adminReducer from '../reducers/adminReducer'
import studentsReducer from '../reducers/studentsReducer'

const configureStore = () => {
    const rootReducer = {
        admin: adminReducer,
        students: studentsReducer
    }
    
    const store = createStore(combineReducers(rootReducer),applyMiddleware(thunk))
    return store
}

export default configureStore
