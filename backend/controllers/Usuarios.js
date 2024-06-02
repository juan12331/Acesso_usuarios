const Usuarios = require('../models/Usuarios')

exports.getAll = async (req, res) => {
    const usuarios = await Usuarios.findAll();
    console.log(usuarios);
    res.json(usuarios)
}

exports.getByName = async (req, res) => {
    const usuario = await Usuarios.findOne({ where: { nome: req.params.nome }})
    console.log(usuario);
    res.json(usuario)
}

exports.createUsuario = async (req, res) => {
    const usuarioCriado = await Usuarios.create(req.body)
    console.log(usuarioCriado)
    return res.send('usuario cadastrado com sucesso')
}

exports.deleteUsuario = async (req, res) => {
    const encontrarUsuario = await Usuarios.findOne({ where: {id: req.params.id}})
    res.send(encontrarUsuario);
    try{
    await encontrarUsuario.destroy();
    } catch (error) {
        console.log('deu erro aqui fi', error)
    } finally {
    return res.send('usuario deletado com sucesso')
    }
}
