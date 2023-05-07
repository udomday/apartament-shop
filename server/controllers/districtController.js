const { District, DistrictPhotos } =  require("../models/models");
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
                photos.forEach(photo => {
                    let fileName = uuid.v4() + ".jpg"
                    photo.mv(path.resolve(__dirname, '..', 'static', fileName))
                    DistrictPhotos.create({
                        linkPhoto: fileName,
                        districtId: district.id
                    })
                });
            }
    
            return res.json(district)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const districts = await District.findAll()
        return res.json(districts)
    }

    async getOne(req, res){
        const {id} = req.params
        const district = await District.findOne(
            {
                where: {id},
                include: [{model: DistrictPhotos, as: 'photos'}]
            }
        )
        return res.json(district)
    }
}

module.exports = new DistrictController();