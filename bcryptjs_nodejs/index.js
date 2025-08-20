const express = require('express');
const app = express();
const bcryptjs = require('bcryptjs');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/login', async(req, res) => {
    //datos que vamos a cargar en postman
    const user = req.body.user;
    const password = req.body.password;

    //comprobamos que sean los datos correctos
    if (user == 'jpatino1806' && password == 'Jepy#180613#') {

        let passHash = await bcryptjs.hash(password, 8);

        res.json({
        message: 'AUTENTICACION EXITOSA',
        passHash: passHash
        });    
    }else{
        res.json({
            message: 'INGRESE SUS CREDENCIALES CORRECTAS'
        })
    }
});

app.get('/compare', (req, res) =>{
    let hashSaved = '$2b$08$iuGIro3KZi4FgGUiw0Iwfeo1fOd0pOzs9hK.U3tRdWH3t56G4HxTO';
    let compare = bcryptjs.compareSync('Jepy#180613#', hashSaved);
    if (compare) {
        res.json('Comparacion OK');
    }else{
        res.json('Comparacion incorrecta');
    }
});

app.listen(3000, ()=>{
    console.log('Servidor UP en el puerto 3000');
})