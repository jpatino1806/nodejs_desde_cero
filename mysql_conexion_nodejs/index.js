const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'usuarios_db',
    user: 'root',
    password: ''
});

conexion.connect(function(error) {
    if(error){
        throw error;
    }else{
        console.log('CONEXION EXITOSA A BASE DE DATOS');
    }
});

conexion.query('select * from users', function(error, results){
    if(error)
        throw error;
    results.forEach(result => {
        console.log(result);
    });
});

conexion.end();
