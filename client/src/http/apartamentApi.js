import { useContext } from "react";
import { $authHost, $host } from ".";
import jwt_decode from 'jwt-decode'

export const createType = async (type) => {
    const {data} = await $authHost.post('api/apartype', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/apartype')
    return data
}


export const createDistrict = async (district) => {
    const {data} = await $authHost.post('api/district', district)
    return data
}

export const fetchDistricts = async () => {
    const {data} = await $host.get('api/district')
    return data
}

export const fetchOneDistrict = async (id) => {
    const {data} = await $host.get('api/district/' + id)
    return data
}

export const createApartament = async (district) => {
    const {data} = await $authHost.post('api/apartament', district)
    return data
}

export const fetchApartaments = async (districtId) => {
    console.log(districtId)
    const {data} = await $host.get('api/apartament?districtId=' + districtId)
    return data
}

export const fetchOneApartament = async (id) => {
    const {data} = await $host.get('api/apartament/' + id)
    return data
}