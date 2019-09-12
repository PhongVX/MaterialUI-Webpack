import * as employeesApi from '../apis/employeeApi'
import * as employeesConstants from '../constants/employeeConstants'

export const fetchListEmployee = ()=>{
    return{
        type: employeesConstants.FETCH_EMPLOYEES
    }
}

export const fetchListEmployeeSuccess = (data)=>{
    return{
        type: employeesConstants.FETCH_EMPLOYEES_SUCCESS,
        payload:{
            data
        }
    }
}

export const fetchListEmployeeFailed = (error)=>{
    return{
        type: employeesConstants.FETCH_EMPLOYEES_FAILED,
        payload:{
            error
        }
    }
}

export const fetchListEmployeeRequest = ()=>{
    return dispatch =>{
        dispatch(fetchListEmployee())
        employeesApi
        .getListEmployee()
        .then(resp=>{
            const {data} = resp
            dispatch(fetchListEmployeeSuccess(data))
        }).catch(error=>{
            dispatch(fetchListEmployeeFailed(error))
        })
    }
}

export const createEmployeeRequest = (payload) =>{
    return dispatch =>{
        dispatch(fetchListEmployee())
        employeesApi
        .createEmployee(payload)
        .then(resp=>{
            dispatch(fetchListEmployeeRequest())
        }).catch(error=>{
            console.log(error)
        })
    } 
}

export const deleteEmployeeRequest = (id) =>{
    return dispatch =>{
        dispatch(fetchListEmployee())
        employeesApi
        .deleteEmployee({"id":id})
        .then(resp=>{
            dispatch(fetchListEmployeeRequest())
        }).catch(error=>{
            console.log(error)
        })
    } 
}