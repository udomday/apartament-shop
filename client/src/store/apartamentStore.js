import {makeAutoObservable} from 'mobx';

export default class ApartamentStore {
    constructor() {
        this._types = []

        this._selectedType = ''

        this._districts = []

        this._selectedDistricts = {}

        this._apartaments = []

        this._districtPage = 1
        this._districtTotalCount = 0
        this._districtLimit = 4

        this._apartamentPage = 1
        this._apartamentTotalCount = 0
        this._apartamentLimit = 10

        makeAutoObservable(this)
    }

    setApartaments(apartaments){
        this._apartaments = apartaments
    }

    setDistrict(districts){
        this._districts = districts
    }

    setTypes(types){
        this._types = types
    }

    setSelectedType(selectedType){
        this._selectedType = selectedType
    }

    setSelectedDistrict(selectedDistrict){
        this._selectedDistrict = selectedDistrict
    }

    setDistrictPage(page){
        this._districtPage = page
    }

    setDistrictTotalCount(totalCount){
        this._districtTotalCount = totalCount
    }

    setDistrictLimit(limit){
        this._districtLimit = limit
    }

    setApartamentPage(page){
        this._apartamentPage = page
    }

    setApartamentTotalCount(totalCount){
        this._apartamentTotalCount = totalCount
    }

    setApartamentLimit(limit){
        this._apartamentLimit = limit
    }

    get apartaments() {
        return this._apartaments
    }
    get districts() {
        return this._districts
    }
    get types() {
        return this._types
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedDistrict(){
        return this._selectedDistrict
    }
    get districtPage(){
        return this._districtPage
    }
    get districtTotalCount(){
        return this._districtTotalCount 
    }
    get districtLimit(){
        return this._districtLimit
    }
    get apartamentPage(){
        return this._apartamentPage
    }
    get apartamentTotalCount(){
        return this._apartamentTotalCount 
    }
    get apartamentLimit(){
        return this._apartamentLimit
    }
}