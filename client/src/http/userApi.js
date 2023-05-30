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

export const updateUserInfo = async (FIO, phoneNumber, id) => {
    try{
        const {data} = await $authHost.put('api/user/update', {FIO, phoneNumber}, {params: {id}})
        localStorage.setItem('token', data.token)
        return jwt_decode(data.token)
    } catch(e){
        alert(e.response.data.message)
    }
}

export const createPassport = async (pasNumber, pasCode, pasDate, userDate, pasGet, userId) => {
    try{
        const {data} = await $authHost.post('api/user/passport', {pasNumber, pasCode, pasDate, userDate, pasGet, userId})
        return data
    }catch(e){
        alert(e.response.data.message)
    }
}

export const getPassport = async (userId) => {
    const {data} = await $authHost.get('api/user/passport', {params: {userId}})
    return data
}

export const updatePassport = async (pasNumber, pasCode, pasDate, userDate, pasGet, userId) => {
    try{
        const {data} = await $authHost.put('api/user/passport', {pasNumber, pasCode, pasDate, userDate, pasGet}, {params: {userId}})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const getFavList = async (id) => {
    try{
        const {data} = await $authHost.get('api/user/favlist', {params: {id}})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const getOneFavItem = async (favListId, apartamentId) => {
    try{
        const {data} = await $authHost.get('api/user/favitem', {params: {favListId, apartamentId}})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const getAllFavItems = async (id) => {
    try{
        const {data} = await $authHost.get('api/user/favitems', {params: {id}})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const createFavItem = async (favListId, apartamentId) => {
    try{
        console.log(favListId, apartamentId)
        const {data} = await $authHost.post('api/user/favitem', {favListId, apartamentId})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const deleteFavItem = async (id) => {
    try{
        const {data} = await $authHost.delete('api/user/favitem', {params: {id}})
        return data
    } catch(e){
        alert(e)
    }
}

export const createPurchaseOrder = async (userId, apartamentId, status) => {
    try {
        const {data} = await $authHost.post('api/user/purchaseorder', {userId, apartamentId, status})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const getAllPurchaseOrder = async (userId) => {
    try {
        const {data} = await $authHost.get('api/user/purchaseorders', {params: {userId}})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const getAdminAllPurchaseOrder = async (userId, apartamentId) => {
    try {
        const {data} = await $authHost.get('api/user/adminpurchaseorder')
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const getOnePurchaseOrder = async (userId, id) => {
    try {
        const {data} = await $authHost.get('api/user/purchaseorder', {params: {userId, id}})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const deletePurchaseOrder = async (id) => {
    try {
        const {data} = await $authHost.delete('api/user/purchaseorder', {params: {id}})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}

export const updatePurchaseOrder = async (id, status) => {
    try {
        const {data} = await $authHost.put('api/user/updatepurchaseorder', {status}, {params: {id}})
        return data
    } catch(e){
        alert(e.response.data.message)
    }
}