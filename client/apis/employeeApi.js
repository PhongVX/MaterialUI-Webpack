import axiosService from '../commons/axiosService'

import {API_ENDPOINT} from '../constants'

//http://localhost:3000/employees
const url ='employees'

export const getList = ()=>{
    return axiosService.get(`${API_ENDPOINT}/${url}`)
}