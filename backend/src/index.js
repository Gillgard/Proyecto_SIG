const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser')

require('./dbs/oracle');
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev')); //Permite ver en consola el intercambio de datos mediante las peticiones http
app.use(express.json());
app.use(bodyParser.json()); //Para leer peticiones application/JSON
app.use(bodyParser.urlencoded({ extended: true })) //Para leer peticiones http (get/post)

app.use(cors({ //Cors permite la comunicacion entre dos servidores
    origin: ['http://localhost:4200'], //frontend server
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // true enable set cookie
}));

app.use(function (req, res, next) {
    res.header()
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Origin", 'http://localhost:4200'); //frontend server //antes estaba localhost en lugar de la IP http://localhost:4200
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
}); 

// Routes
app.use('/api/usuarios',require('./routes/usuario_routes'))

//Starting the server
app.listen(app.get('port'), "0.0.0.0", () => {
        console.log(`Server on port ${app.get('port')}`);
    });
