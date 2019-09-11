import * as productConstants from '../constants/productConstants'

const initialState = {
    listEmployee:[]
}

const employeesReducer = (state = initialState, action)=>{
    switch(action.type){
        case employeesConstants.FETCH_EMPLOYEES:{
            return {
                ...state,
                listEmployee:[]
            }
        }
        case employeesConstants.FETCH_EMPLOYEES_SUCCESS:{
            const {data} = action.payload
            return {
                ...state,
                listEmployee: data
            }
        }
        case employeesConstants.FETCH_EMPLOYEES_FAILED:{

        }
        default:
            return state
    }
}

export default employeesReducer