import {User} from './user.js'
import {Article} from './article.js'

//Relacion de 1 a muchos entre usuarios y articulos
User.hasMany(Article, {
    //opcional si queremos cambiar el nombre de UserId
    foreignKey: "idUser",
    //opcional cuando eliminamos el user tambien se elimeine todos sus articulos
    onDelete: "CASCADE"
})
Article.belongsTo(User, {
    foreignKey: "idUser"
})
