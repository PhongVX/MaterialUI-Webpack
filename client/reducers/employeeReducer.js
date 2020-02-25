import * as employeesConstants from '../constants/employeeConstants'

const initialState = {
    listEmployee:{ 

    }
}

const employeesReducer = (state = initialState, action)=>{
    switch(action.type){
        case employeesConstants.FETCH_EMPLOYEES:{
            const {componentId} = action.payload
            return {
                ...state,
                listEmployee: {
                    ...state.listEmployee,
                    [componentId]:[]
                
                }
            }
        }
        case employeesConstants.FETCH_EMPLOYEES_SUCCESS:{
            const {data, componentId} = action.payload
            return {
                ...state,
                listEmployee: {
                    ...state.listEmployee,
                    [componentId]:data
                }
            }
        }
        case employeesConstants.FETCH_EMPLOYEES_FAILED:{

        }
        default:
            return state
    }
}

export default employeesReducer