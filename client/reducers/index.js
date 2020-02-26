import {combineReducers} from 'redux'
import taskReducer from './taskReducer'
import employeeReducer from './employeeReducer'
import tabPaneReducer from './tabPaneReducer'

/**
 * @param {Object} - key/value of reducer functions 
 */
const createReducer = asyncReducers =>
  combineReducers({
    tasks : taskReducer,
    employees: employeeReducer,
    tabPane: tabPaneReducer,
    // When reducers are provided to createReducer they'll be plopped on here
    ...asyncReducers
});

export default createReducer