import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexionDB.js";

export class UserProfile extends Model{}

UserProfile.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        bio: {
            type: DataTypes.TEXT
        },
        birthday: {
            type: DataTypes.DATEONLY
        },
        photo: {
            type: DataTypes.STRING
        },
        userId: {
            type: DataTypes.INTEGER,
            unique: true
        }
    },
    {
        sequelize,
        modelName: 'UserProfile',
        tableName: 'userProfile',
        timestamps: false
    }
)