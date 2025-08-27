import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexionDB.js";

export class User extends Model{}

User.init(
   {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        name: {type: DataTypes.STRING},
        email: {type: DataTypes.STRING},
        password: {type: DataTypes.STRING}
    },
    {
        sequelize,
        modelName: 'User',
        tableName: 'user',
        timestamps: false
    }
)