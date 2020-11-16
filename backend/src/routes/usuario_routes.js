const { Router } = require('express');
const router = Router();

const { getUsers, getHelp, login } = require('../controllers/usuario_controller');

router.get('/', getUsers);
router.get('/help', getHelp);
router.post('/login', login);

function verifyToken(req, res, next) {
    if(!req.headers['authorization']){
        return res.status(401).send('Usuario no autorizado')
    }
    const token = req.headers.authorization.split(' ')[1]
    if(token === null) {
        return res.status(401).send('Usuario no autorizado')
    }
    const payload = jwt.verify(token, 'secretkey')
    req.userId = payload.user_id;
    next();
}

module.exports = router; 
