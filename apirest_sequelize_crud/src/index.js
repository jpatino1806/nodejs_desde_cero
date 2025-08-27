import {app} from "./app.js";
import {sequelize} from "./database/conexionDB.js";
import { Article } from "./models/article.js";
import { User } from "./models/user.js";


async function main(){
    await sequelize.sync({force: false}).then( () => {
        console.log('conexion a la base de datos exitosa');
    })
    app.listen(3000, () => {
        console.log('servidor corriendo en el puerto 3000');

    })
}

main();
