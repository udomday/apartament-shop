const sequelize = require("../db");
const {DataTypes} = require("sequelize");

const User = sequelize.define('user',{
    userId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    FIO: {type: DataTypes.STRING, allowNull: false},
    phoneNumber: {type: DataTypes.STRING, unique: true, allowNull: false},
    passportId: {type: DataTypes.INTEGER, allowNull: true},
    password: {type: DataTypes.STRING, allowNull: false},
    SNILS: {type: DataTypes.INTEGER, unique: true, allowNull: true},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
});

const Passport = sequelize.define('passport', {
    passportId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    pasNumber: {type: DataTypes.INTEGER, unique: true, allowNull: false},
    pasCode: {type: DataTypes.INTEGER, allowNull: false},
    pasGet: {type: DataTypes.STRING, allowNull: false},
    pasDate: {type: DataTypes.DATE, allowNull: false}
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

User.hasOne(Passport);
Passport.belongsTo(User);

//Избранное
User.hasOne(FavList);
FavList.belongsTo(User);

FavList.hasMany(FavApartament);
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
    ApartamentPhotos
}