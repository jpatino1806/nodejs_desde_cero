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

//MOSTRAR
conexion.query('SELECT * FROM users', function(error, filas){
    if(error)
        throw error;
    filas.forEach(fila => {
        console.log(fila);
    });
});

// //INSERTAR
// conexion.query('INSERT INTO users(nombre, telefono) values ("Jaime", "992587458")', function(error, results) {
//     if (error) throw error;
//     console.log('registro agregado', results);
// });

// //ACTUALIZAR
// conexion.query('UPDATE users SET nombre = "Steve" WHERE id=8', function(error, results){
//     if(error) throw error;
//     console.log('Registro actualizado...', results);
// });

//ELIMINAR
conexion.query('DELETE FROM users WHERE id=8', function(error, results) {
    if(error) throw error;
    console.log('Registro eliminado !', results);
});


conexion.end();
