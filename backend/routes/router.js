const express = require('express')
const router = express.Router();
const UsuariosControllers = require('../controllers/Usuarios')

router.get('/usuarios', UsuariosControllers.getUsers);
router.get('/usuarios/:id', UsuariosControllers.getUsersById);

router.post('/login', UsuariosControllers.login);

router.post('/usuarios', UsuariosControllers.createUsuario)
router.delete('/usuarios/:id', UsuariosControllers.deleteUsuario)
router.put('/usuarios/:id', UsuariosControllers.updateUsuario)

module.exports = router