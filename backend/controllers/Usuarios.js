const Usuarios = require('../models/Usuarios')

exports.getAll = async (req, res) => {
    const usuarios = await Usuarios.findAll( { limit: 20 } );
    console.log(usuarios);
    res.json(usuarios)
}

exports.getByName = async (req, res) => {
    const usuario = await Usuarios.findOne({ where: { nome: req.params.nome }}, { limit: 20 })
    console.log(usuario);
    res.json(usuario)
}

exports.getById = async (req, res) => {
    const usuario = await Usuarios.findOne({ where: { id: req.params.id }}, {limit: 1})
    console.log(usuario);
    res.json(usuario)
}

exports.getByEmail = async (req, res) => {
    const usruario = await Usuarios.findOne( { where : { email: req.params.email}}, {limit: 1})
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
    try{
    await encontrarUsuario.destroy();
    return res.send('usuario deletado')
    } catch (error) {
       return res.send('deu erro aqui fi', error)
    } 
}

exports.updateUsuario = async (req, res) => {
    const ID = req.params.id
    const idUsuario = await Usuarios.findOne({ where: {id: ID}}) // encontra um usuario a partir do id
    if (idUsuario) {
        try {
            console.log('skjckjhdjkhzdkjhdasjkd')

            const [Updates] = await Usuarios.update(req.body, { where: {id: req.params.id}}) // verifica se tem alguma alteração
                return res.send({ message: 'Usuario foi atualizado ;P', })

        } catch (error) {
            res.send('deu erro aqui parcero ==> ',  error)
        }
    }
    res.send('Usuario não encontrado')
}