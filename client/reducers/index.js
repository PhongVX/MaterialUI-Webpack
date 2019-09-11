import {combineReducers} from 'redux'
import taskReducer from './taskReducer'
import employeeReducer from './employeeReducer'

const rootReducer = combineReducers({
    tasks : taskReducer,
    employees: employeeReducer
})

export default rootReducer