const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const oracledb = require('oracledb');
const md5 = require('md5');


const usuario_controller = {  };

usuario_controller.getUsers = async (req, res) => {
    res.send('Hola')
}

usuario_controller.getHelp = async (req, res) => {

    connection.execute("SELECT * FROM HELP", {}, {
        outFormat: oracledb.OBJECT // Return the result as Object
    }, function (err, result) {
        if (err) {
            res.set('Content-Type', 'application/json');
            res.status(500).send(JSON.stringify({
                status: 500,
                message: "Error getting the dba_tablespaces",
                detailed_message: err.message
            }));
        } else {
            res.header('Access-Control-Allow-Origin','*');
            res.header('Access-Control-Allow-Headers','Content-Type');
            res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
            res.contentType('application/json').status(200);
            res.send(JSON.stringify(result.rows));
        }
    });
};

usuario_controller.login = async (req, res) => {
    
    var { usuario, password } = req.body 
    
    grupo = 2;
    user_pass = md5(password)

    console.log(user_pass)

    try {
        const result = await connection.execute('SELECT MEMBERID FROM USUARIO WHERE MEMBERID=:usuario AND PASSMD5=:password AND GROUPID=:grupo', [usuario, user_pass, grupo],//no binds
        {
            outFormat: oracledb.OBJECT
        });
        UsuarioEncontrado = result.rows[0]
        if (!UsuarioEncontrado){
            res.status(401).send('Usuario no encontrado, verifique el correo o la contraseña ingresados.')
            return done(null, false, { message: 'Usuario no encontrado' })
        }else{
            console.log('Usuario encontrado')
            const token = jwt.sign({ ID: result.rows[0].MEMBERID }, 'secretkey');
            res.status(200).json( {token} )
        }
    } catch (error) {
        res.status(401).send("Correo y/o contraseña no encontrados en la base de datos")
    }
};

module.exports = usuario_controller;
