const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING, allowNull: false},
    phoneNumber: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
});

const Passport = sequelize.define('passport', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pasNumber: {type: DataTypes.STRING, unique: true, allowNull: false},
    pasCode: {type: DataTypes.STRING, allowNull: false},
    pasGet: {type: DataTypes.STRING, allowNull: false},
    pasDate: {type: DataTypes.STRING, allowNull: false},
    userDate: {type: DataTypes.STRING, allowNull: false}
});

const FavList = sequelize.define('favList', {
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const FavApartament = sequelize.define('FavApartament', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const District = sequelize.define('district',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    metro: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

const DistrictPhotos = sequelize.define('districtPhotos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    linkPhoto: {type: DataTypes.STRING, allowNull: false}
});


const Apartament = sequelize.define('apartament', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
});

const ApartamentType = sequelize.define('apartamentType', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
})

const ApartamentInfo = sequelize.define('apartamentInfo', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
});

const ApartamentPhotos =  sequelize.define('apartamentPhotos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    linkPhoto: {type: DataTypes.STRING, allowNull: false}
});

const Chat = sequelize.define('chat', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    userId: {type: DataTypes.INTEGER, unique: true, allowNull: false}
});

const Message = sequelize.define('message', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    message: {type: DataTypes.STRING, allowNull: false}
});

const PurchaseOrder = sequelize.define('purchaseorder', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, allowNull: false}
});

User.hasOne(Passport);
Passport.belongsTo(User);

//Избранное
User.hasOne(FavList);
FavList.belongsTo(User);

FavList.hasMany(FavApartament, {as: 'favitems'});
FavApartament.belongsTo(FavList);

//Чат
User.hasMany(Chat);
Chat.belongsTo(User);

Chat.hasMany(Message);
Message.belongsTo(Chat);

//Объект
ApartamentType.hasOne(Apartament);
Apartament.belongsTo(ApartamentType);

District.hasMany(Apartament, {as: 'apartaments'});
Apartament.belongsTo(District)

District.hasMany(DistrictPhotos, {as: 'photos'});
DistrictPhotos.belongsTo(District)

Apartament.hasMany(FavApartament);
FavApartament.belongsTo(Apartament);

Apartament.hasMany(ApartamentInfo, {as: 'info'});
ApartamentInfo.belongsTo(Apartament);

Apartament.hasMany(ApartamentPhotos, {as: 'photos'});
ApartamentPhotos.belongsTo(Apartament);

//Покупка квартиры

Apartament.hasMany(PurchaseOrder)
PurchaseOrder.belongsTo(Apartament)

User.hasMany(PurchaseOrder)
PurchaseOrder.belongsTo(User)

module.exports = {
    User,
    Passport,
    Chat,
    Message,
    FavList,
    FavApartament,
    District,
    DistrictPhotos,
    Apartament,
    ApartamentType,
    ApartamentInfo,
    ApartamentPhotos,
    PurchaseOrder
}