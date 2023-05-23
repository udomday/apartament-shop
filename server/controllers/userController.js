require("dotenv").config()
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, FavList, Passport} = require('../models/models')

const generateJWT = (id, phone, role, FIO) => {
    return jwt.sign(
        {id, phone, role, FIO}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
        )
}

class UserController {
    async registration(req, res, next) {
        const {phoneNumber, password, FIO, role} = req.body
        if(!phoneNumber || !password){
            return next(ApiError.badRequest('Некорректный номер телефона или пароль'))
        }
        const candidate = await User.findOne({where: {phoneNumber}})
        if(candidate){
            return next(ApiError.badRequest('Пользователь с таким номером телефона уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({phoneNumber, FIO, role, password: hashPassword})
        const favList = await FavList.create({userId: user.id})
        const token = generateJWT(user.id, user.phoneNumber, user.role, user.FIO)
        return res.json({token})
    }

    async login(req, res, next) {
        const {phoneNumber, password} = req.body;
        const user = await User.findOne({where: {phoneNumber}})
        if(!user){
            return next(ApiError.badRequest('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.badRequest('Неверный логи или пароль'))
        }
        const token = generateJWT(user.id, user.phoneNumber, user.role, user.FIO)

        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.phone, req.user.role, req.user.FIO)
        return res.json({token})
    }

    async updateUserInfo(req, res, next){
        const {id} = req.query
        const user = await User.update({FIO, phoneNumber},{where: id})
        const token = generateJWT(user.id, user.phoneNumber, user.role, user.FIO)
        return res.json({token})
    }

    async createPassport(req, res, next){
        const {pasNumber, pasCode, pasDate, userDate, pasGet, userId} = req.body
        const passport = await Passport.create({pasNumber, pasCode, pasDate, userDate, pasGet, userId})
        return res.json(passport)
    }

    async getPassport(req, res, next){
        try{
            const {userId} = req.query
            const passport = await Passport.findOne({where: {userId}})
            return res.json(passport)
        }catch(e){
            console.log(e)
        }
    }

    async updatePassport(req, res, next){
        const {pasNumber, pasCode, pasDate, userDate, pasGet} = req.body
        const {userId} = req.query
        const passport = await Passport.update({pasNumber, pasCode, pasDate, userDate, pasGet}, {where: {userId}})
        return res.json(passport)
    }

}

module.exports = new UserController();