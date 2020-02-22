import {combineReducers} from 'redux'
import taskReducer from './taskReducer'
import employeeReducer from './employeeReducer'

/**
 * @param {Object} - key/value of reducer functions 
 */
const createReducer = asyncReducers =>
  combineReducers({
    tasks : taskReducer,
    employees: employeeReducer,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers
});

export default createReducer