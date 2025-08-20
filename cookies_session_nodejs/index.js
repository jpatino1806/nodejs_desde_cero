const express = require('express');
const session = require('express-session');
const app = express();

const MySQLStore = require('express-mysql-session')(session);
const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'prueba_session_db'
};

const sessionStore = new MySQLStore(options);
app.use(session({
    key: 'cookie_usuario',
    secret: '123456',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));

// app.use(session({
//     secret: 'jpatino1806',
//     resave: true,
//     saveUninitialized: true
// }));

app.get('/', (req, res)=>{
    req.session.usuario = 'Franco Patiño';
    req.session.rol = 'Admin';
    console.log(req.session);
    req.session.visitas = req.session.visitas ? ++req.session.visitas : 1;
    res.send(`<H3>El usuario <strong>${req.session.usuario} </strong>
        con rol <strong>${req.session.rol} </strong>
        ha visitado <strong>${req.session.visitas} </strong> veces</H3>
    `);
});

app.listen(3000, ()=>{
    console.log('servidor corriendo en puerto 3000');
});


