const express = require('express');
const app = express();

app.get("/",function(req, res){
    res.send('Hola jaime -  Servidor Web basico express');
});

app.listen(3000, function(req, res) {
    console.log('servidor corrriendo en el puerto 3000');
});