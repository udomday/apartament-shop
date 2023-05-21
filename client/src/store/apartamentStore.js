import {makeAutoObservable} from 'mobx';

export default class ApartamentStore {
    constructor() {
        this._types = []

        this._selectedType = {}

        this._districts = []

        this._selectedDistricts = {}

        this._apartaments = [
            {id: 1, type: 'Студия', price: '123321323', districtDistrictId: 1, info: 
            [{id: 1, title: 'Площадь', description: '19.87'},
            {id: 2, title: 'Этаж', description: '2'},
            {id: 3, title: 'Заселение', description: 'Заселение до 25 марта 2025'},
            {id: 4, title: 'Корпус', description: '1.1'},
            ]},
            {id: 2, type: 'Двухкомнатная', price: '2001232', districtDistrictId: 1, info: 
            [{id: 5, title: 'Площадь', description: '19.87'},
            {id: 6, title: 'Этаж', description: '2'},
            {id: 7, title: 'Заселение', description: 'Заселение до 25 марта 2025'},
            {id: 8, title: 'Корпус', description: '1.1'},
            ]}
        ]

        this._districtPage = 1
        this._districtTotalCount = 0
        this._districtLimit = 4

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
}