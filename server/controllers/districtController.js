const { District, DistrictPhotos, Apartament } =  require("../models/models");
const ApiError = require("../error/ApiError")
const uuid = require('uuid')
const path = require('path')

class DistrictController {
    async create(req, res, next){
        try{
            const {title, metro, description} = req.body
            const {photos} = req.files
            const district = await District.create({title, metro, description})
            console.log(photos)
            if(!!photos){
                let fileName = uuid.v4() + ".jpg"
                photos.mv(path.resolve(__dirname, '..', 'static', fileName))
                DistrictPhotos.create({
                    linkPhoto: fileName,
                    districtId: district.id
                })
            }
    
            return res.json(district)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 9
        console.log(limit, page)
        let offset = page * limit - limit
        const districts = await District.findAndCountAll({
            include: [{model: DistrictPhotos, as: 'photos'}],
            limit: Number(limit), 
            offset: Number(offset)
        })
        return res.json(districts)
    }

    async getOne(req, res){
        const {id} = req.params
        const district = await District.findOne(
            {
                where: {id},
                include: [{model: DistrictPhotos, as: 'photos'}, {model: Apartament, as: 'apartaments'}]
            }
        )
        return res.json(district)
    }
}

module.exports = new DistrictController();