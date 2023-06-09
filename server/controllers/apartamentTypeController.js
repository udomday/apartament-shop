const { ApartamentType } =  require("../models/models");
const ApiError = require("../error/ApiError")

class ApartamentTypeController {
    async create(req, res){
        const {title} = req.body
        const type = await ApartamentType.create({title})
        return res.json(type)
    }

    async getAll(req, res){
        const types = await ApartamentType.findAll()
        return res.json(types)
    }

    async getOneType(req, res){
        const {id} = req.query
        const type = await ApartamentType.findOne({where: {id}})
        return res.json(type)
    }
}

module.exports = new ApartamentTypeController();