/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express');
const router = Router();

const { createUser, loginUsuario, revalidarToken } = require('../controllers/auth');

router.post('/new', createUser);

router.post('/', loginUsuario);

router.get('/renew', revalidarToken);

module.exports = router;