const express = require('express')
const router = express.Router();
const UsuariosControllers = require('../controllers/Usuarios')

router.get('/usuarios', UsuariosControllers.getAll)
router.get('/usuarios:nome', UsuariosControllers.getByName)
router.get('/usuarios/:id', UsuariosControllers.getById)


router.post('/usuarios', UsuariosControllers.createUsuario)
router.delete('/usuarios:id', UsuariosControllers.deleteUsuario)
router.put('/usuarios:id', UsuariosControllers.updateUsuario)

module.exports = router