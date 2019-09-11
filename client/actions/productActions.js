import * as employeesApi from '../apis/employeeApi'
import * as employeesConstants from '../constants/employeeConstants'

export const fetchListProduct = ()=>{
    return{
        type: employeesConstants.FETCH_EMPLOYEES
    }
}

export const fetchListProductSuccess = (data)=>{
    return{
        type: employeesConstants.FETCH_EMPLOYEES_SUCCESS,
        payload:{
            data
        }
    }
}

export const fetchListProductFailed = (error)=>{
    return{
        type: employeesConstants.FETCH_EMPLOYEES_FAILED,
        payload:{
            error
        }
    }
}

export const fetchListProductRequest = ()=>{
    return dispatch =>{
        dispatch(fetchListProduct())
        employeesApi
        .getList()
        .then(resp=>{
            const {data} = resp
            dispatch(fetchListProductSuccess(data))
        }).catch(error=>{
            dispatch(fetchListEmployeeFailed(error))
        })
    }
}