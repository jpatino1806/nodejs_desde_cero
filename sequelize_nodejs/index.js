const express = require('express');
const {Sequelize , DataTypes, JSON } = require('sequelize');
const app = express();

//definimos los parametros de conexion
const sequelize = new Sequelize('postres_db','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

//definimos el modelo
const postresModel = sequelize.define('postres',{
    //'id': {type:DataTypes.INTEGER, primaryKey:true},
    nombre: DataTypes.STRING,
    calorias: DataTypes.INTEGER
});

//nos conectamos a la db
try {
  await sequelize.authenticate();
  console.log('Connection a la base de datos OK.');
} catch (error) {
  console.log('error de conexion a la base datos', error);
}

    //mostrar elementos de la base datos
postresModel.findAll({attributes:['nombre', 'calorias']})
    .then(postres => {
        //const resultados =  

        console.log(postres);
    })
    .catch(error => {
        console.log(error)
    });

app.listen(3000, () => {
    console.log('servidor UP puerto 3000');
});