const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const keys = require('./settings/keys');

app.set('key', keys.key);
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Hola Mundo JWT');
});


app.listen(3000, ()=> {
    console.log('servidor corriendo puerto 3000');
});

app.post('/login', (req, res) => {
    if (req.body.usuario == 'admin' && req.body.pass == "123456") {
        const payload = {
            check: true
        };
        const token = jwt.sign(payload, app.get('key'), {
            expiresIn: '10m'
        });
        res.json({
            message: 'AUTENTICACION EXITOSA',
            token: token
        });
    }else{
        res.json({
            message: 'usuario y password son incorrectos'
        });
    }
});

const verificacion = express.Router();

verificacion.use((req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    //console.log(token);
    if (!token) {
        res.status(401).send({
            error: 'es necesario un token para la autenticacion!'
        })
        return 
    }
    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
        console.log(token);
    }
    if (token) {
        jwt.verify(token, app.get('key'), (error, decoded)=> {
            if (error) {
                return res.json({
                    message: 'el token no es valido'
                });
            }else{
                res.decoded = decoded;
                next();
            }
        })
    }
});

app.get('/info', verificacion, (req, res) => {
    res.json('INFORMACION CONTABLE PRIVADA!!!!!!');

});