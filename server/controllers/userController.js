require("dotenv").config()
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, FavList} = require('../models/models')

const generateJWT = (id, phone, role) => {
    return jwt.sign(
        {id, phone, role}, 
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
        const favList = await FavList.create({userUserId: user.id})
        const token = generateJWT(user.id, user.phoneNumber, user.role)
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
        const token = generateJWT(user.id, user.phoneNumber, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJWT(req.user.id, req.user.phoneNumber, req.user.role)
        return res.json({message: 'ALL RIGHT'})
    }
}

module.exports = new UserController();