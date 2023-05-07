const { Apartament, ApartamentInfo, ApartamentPhotos } =  require("../models/models");
const ApiError = require("../error/ApiError")
const uuid = require('uuid')
const path = require('path')

class ApartamentController {
    async create(req, res, next){
        try{
            const {title, apartamentTypeId, price, info} = req.body
            const {photos} = req.files
            const apartament = await Apartament.create({title, apartamentTypeId, price})
            if(!!info){
                console.log("РАБОТАЕТ")
                info = JSON.parse(info)
                info.forEach(i => {
                    ApartamentInfo.create({
                        title: i.title,
                        description: i.description,
                        apartamentId: apartament.id
                    })
                });
            }

            if(!!photos){
                photos.forEach(photo => {
                    let fileName = uuid.v4() + ".jpg"
                    photo.mv(path.resolve(__dirname, '..', 'static', fileName))
                    ApartamentPhotos.create({
                        linkPhoto: fileName,
                        apartamentId: apartament.id
                    })
                });
            }
            
            return res.json(apartament)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res){
        const {apartamentTypeId, limit, page} = req.body
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let apartaments;
        if(!apartamentTypeId){
            apartaments = await Apartament.findAndCountAll(limit, offset);
        } else{
            apartaments = await Apartament.findAndCountAll({where:{apartamentTypeId}}, limit, offset);
        }
        return res.json(apartaments)
    }

    async getOne(req, res){
        const {id} = req.params
        const apartament = await Apartament.findOne(
            {
                where: {id},
                include: [{model: ApartamentInfo, as: 'info'}, {model: ApartamentPhotos, as: 'photos'}]
            }
        )
        return res.json(apartament)
    }
}

module.exports = new ApartamentController();