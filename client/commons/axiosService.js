import axios from 'axios'
class axiosService {
    constructor(){
        const instance = axios.create({headers: {"Content-Type": "application/json;charset=utf-8" }})
        instance.interceptors.response.use(this.handleSuccess, this.handleError)
        this.instance = instance
    }

    handleSuccess(response){
        return response
    }

    handleError(error){
        return Promise.reject(error)
    }

    get(url){
        return this.instance.get(url)
    }

    post(url, payload){
        return this.instance.post(url, payload)
    }

    delete(url, payload){
        return this.instance.post(url, payload)
    }
}

export default new axiosService()