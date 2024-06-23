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

exports.getById = async (req, res) => {
    const usuario = await Usuarios.findOne({ where: { id: req.params.id }})
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
    const idUsuario = await Usuarios.findOne({ where: {id: req.params.id }}) // encontra um usuario a partir do id
    if (idUsuario) {
        try {
            console.log('skjckjhdjkhzdkjhdasjkd')

            const [Updates] = await Usuarios.update(req.body, { where: {id: req.params.id}}) // verifica se tem alguma alteração
            
            if (Updates > 0) {
                const usuarioAtualizado = await Usuarios.findOne({ where: { id: idUsuario } })
                return res.send({ message: 'Usuario foi atualizado ;P', usuariocomdadosnovos: usuarioAtualizado})

            } return res.send('Usuario encontrado porém sem nenhuma alteração')

        } catch (error) {
            res.send('deu erro aqui parcero ==> ',  error)
        }
    }
    res.send('Usuario não encontrado')
}