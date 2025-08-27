import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/conexionDB.js";

export class Article extends Model{}

Article.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        title: {type: DataTypes.STRING},
        description: {type: DataTypes.STRING}
    },
    {
        sequelize,
        modelName: 'Article',
        tableName: 'article',
        timestamps: false
    }
)