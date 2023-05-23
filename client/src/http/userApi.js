import { useContext } from "react";
import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const registration = async (phoneNumber, password, FIO) => {
    const {data} = await $host.post('api/user/registration', {phoneNumber, password, FIO, role: 'USER'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (phoneNumber, password) => {
    const {data} = await $host.post('api/user/login', {phoneNumber, password})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const check = async () => {
    try{
        const {data} = await $authHost.get('api/user/auth')
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    }catch(e){
      console.log(e.response.data.message)
    }
}

export const updateUserInfo = async () => {
    const {data} = await $authHost.put('api/user/update')
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const createPassport = async (pasNumber, pasCode, pasDate, userDate, pasGet, userId) => {
    try{
        const {data} = await $authHost.post('api/user/passport', {pasNumber, pasCode, pasDate, userDate, pasGet, userId})
        return data
    }catch(e){
        console.log(e.response.data.message)
    }
}

export const getPassport = async (userId) => {
    const {data} = await $authHost.get('api/user/passport', {params: {userId}})
    return data
}

export const updatePassport = async (pasNumber, pasCode, pasDate, userDate, pasGet, userId) => {
    console.log(pasNumber, pasCode, pasDate, userDate, pasGet, userId)
    const {data} = await $authHost.put('api/user/passport', {pasNumber, pasCode, pasDate, userDate, pasGet}, {params: {userId}})
    return data
}