import * as employeesApi from '../apis/employeeApi'
import * as employeesConstants from '../constants/employeeConstants'

export const fetchListEmployee = (componentId)=>{
    return{
        type: employeesConstants.FETCH_EMPLOYEES,
        payload:{
            componentId
        }
    }
}

export const fetchListEmployeeSuccess = (componentId, data)=>{
    return{
        type: employeesConstants.FETCH_EMPLOYEES_SUCCESS,
        payload:{
            componentId,
            data
        }
    }
}

export const fetchListEmployeeFailed = (componentId, error)=>{
    return{
        type: employeesConstants.FETCH_EMPLOYEES_FAILED,
        payload:{
            componentId,
            error
        }
    }
}

export const fetchListEmployeeRequest = (componentId)=>{
    return dispatch =>{
        dispatch(fetchListEmployee())
        employeesApi
        .getListEmployee()
        .then(resp=>{
            const {data} = resp
            dispatch(fetchListEmployeeSuccess(componentId, data))
        }).catch(error=>{
            dispatch(fetchListEmployeeFailed(componentId, error))
        })
    }
}

export const createEmployeeRequest = (componentId, payload) =>{
    return dispatch =>{
        dispatch(fetchListEmployee())
        employeesApi
        .createEmployee(payload)
        .then(resp=>{
            dispatch(fetchListEmployeeRequest(componentId))
        }).catch(error=>{
            console.log(error)
        })
    } 
}

export const deleteEmployeeRequest = (componentId, id) =>{
    return dispatch =>{
        dispatch(fetchListEmployee())
        employeesApi
        .deleteEmployee({"id":id})
        .then(resp=>{
            dispatch(fetchListEmployeeRequest(componentId))
        }).catch(error=>{
            console.log(error)
        })
    } 
}