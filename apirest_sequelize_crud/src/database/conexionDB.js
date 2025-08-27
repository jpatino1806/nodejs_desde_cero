import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize('blog_db', 'root', '',{
    dialect: 'mysql',
    host: 'localhost'
})