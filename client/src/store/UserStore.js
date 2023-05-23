import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        this._passport = 0
        makeAutoObservable(this)
    }

    setPassport(passport){
        return this._passport = passport
    }

    setIsAuth(bool){
        return this._isAuth = bool
    }

    setUser(user){
        return this._user = user
    }

    get passport() {
        return this._passport
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}