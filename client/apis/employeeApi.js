import axiosService from '../commons/axiosService'

import {API_ENDPOINT} from '../constants'


const url ='employees'
const urlDelete = 'deleteEmployee'

export const getListEmployee = ()=>{
    return axiosService.get(`${API_ENDPOINT}/${url}`)
}

export const createEmployee=(payload)=>{
    return axiosService.post(`${API_ENDPOINT}/${url}`, payload)
}

export const deleteEmployee=(payload)=>{
    return axiosService.delete(`${API_ENDPOINT}/${urlDelete}`, payload)
}