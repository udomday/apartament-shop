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

export const fetchOneTypes = async (id) => {
    const {data} = await $authHost.get('api/apartype/type', {params:{id}})
    return data
}

export const createDistrict = async (district) => {
    const {data} = await $authHost.post('api/district', district)
    return data
}

export const fetchDistricts = async (page, limit) => {
    const {data} = await $host.get('api/district', {params: {
        page, limit
    }})
    return data
}

export const fetchOneDistrict = async (id) => {
    const {data} = await $host.get('api/district/' + id)
    return data
}

export const createApartament = async (apartament) => {
    const {data} = await $authHost.post('api/apartament', apartament)
    return data
}

export const updateApartament = async (apartament) => {
    const {data} = await $authHost.put('api/apartament', apartament)
    return data
}

export const fetchApartaments = async (districtId, page, limit, apartamentTypeId) => {
    const {data} = await $host.get('api/apartament', {params: {
        districtId, page, limit, apartamentTypeId
    }})
    return data
}

export const fetchOneApartament = async (id) => {
    const {data} = await $host.get('api/apartament/' + id)
    return data
}