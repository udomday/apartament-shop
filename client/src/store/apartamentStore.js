import {makeAutoObservable} from 'mobx';

export default class ApartamentStore {
    constructor() {
        this._types = [
            {id:0, title: 'Однокомнатная'},
            {id:0,title:'Двухкомнатная'}
        ]
        this._districts = [
            {id: 1, title: 'ЖК Внуково', metro: 'Рассказовка', description: 'ПООПОп', },
            {id: 2, title: 'ЖК Солнцевский', metro: 'Солнцево', description: 'ПООПОп', },
        ]
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

    get apartaments() {
        return this._apartaments
    }
    get districts() {
        return this._districts
    }
    get types() {
        return this._types
    }
}