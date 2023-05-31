const { Apartament, ApartamentInfo, ApartamentPhotos, ApartamentType } =  require("../models/models");
const ApiError = require("../error/ApiError")
const uuid = require('uuid')
const path = require('path');
const { Sequelize } = require("../db");
const { where } = require("sequelize");

class ApartamentController {
    async create(req, res, next){
        try{
            let {title, apartamentTypeId, districtId, price, info} = req.body
            const {photos} = req.files
            const apartament = await Apartament.create({title, apartamentTypeId, price, districtId})
            try{
                if(!!info){
                    info = JSON.parse(info)
                    info.forEach(i => {
                        ApartamentInfo.create({
                            title: i.title,
                            description: i.description,
                            apartamentId: apartament.id
                        })
                    });
                }
            }catch(e){
                console.log(e)
            }

            if(!!photos){
                    let fileName = uuid.v4() + ".jpg"
                    photos.mv(path.resolve(__dirname, '..', 'static', fileName))
                    ApartamentPhotos.create({
                        linkPhoto: fileName,
                        apartamentId: apartament.id
                    })
            }
            
            return res.json(apartament)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async update(req, res, next){
        try{
            let {id, title, apartamentTypeId, districtId, price, info} = req.body
            const apartament = await Apartament.update({title, apartamentTypeId, price, districtId}, {where: {id}})
            try{
                if(!!info){
                    info = JSON.parse(info)
                    info.forEach(i => {
                        ApartamentInfo.update({
                            description: i.description,
                        }, {where: {apartamentId: id, title: title.i}})
                    });
                }
            }catch(e){
                console.log(e)
            }

            if(!!photos){
                    let fileName = uuid.v4() + ".jpg"
                    photos.mv(path.resolve(__dirname, '..', 'static', fileName))
                    ApartamentPhotos.create({
                        linkPhoto: fileName,
                        apartamentId: apartament.id
                    })
            }
            
            return res.json(apartament)
        }catch(e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next){
        try{
            let {districtId, limit, page, apartamentTypeId} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let apartaments;
            if(!apartamentTypeId){
                apartaments = await Apartament.findAndCountAll(
                    {
                        where:{districtId},
                        include: [{model: ApartamentInfo, as: 'info'}, {model: ApartamentPhotos, as: 'photos'}],
                        limit: Number(limit), 
                        offset: Number(offset)
                    });
                apartaments.count = await Apartament.count()
            } else{
                apartaments = await Apartament.findAndCountAll(
                {
                    where:{apartamentTypeId, districtId},
                    include: [
                        {model: ApartamentInfo, as: 'info'}, 
                        {model: ApartamentPhotos, as: 'photos'},
                    ],
                    limit: Number(limit), 
                    offset: Number(offset)
                });
                apartaments.count = await Apartament.count({where:{apartamentTypeId}})
            }
            return res.json(apartaments)
        }catch(e){
            return res.json({message: "Нет данных"})
        }
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