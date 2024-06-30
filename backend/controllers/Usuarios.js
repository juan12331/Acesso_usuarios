const { Op } = require('sequelize');
const Usuarios = require('../models/Usuarios')

exports.login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const encontrarUsuario = await Usuarios.findOne({ where: { email, senha } });
        if (!encontrarUsuario) {
            return res.status(404).send('Usuario not found');
        }
        return res.send(encontrarUsuario);
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
}

exports.getUsers = async (req, res) => {
    try {
        const { nome, email, papel } = req.query || {};

        if (!nome && !email && !papel) {
            const usuarios = await Usuarios.findAll();
            return res.send(usuarios);
        }

        const where = {
            [Op.or]: [
                nome ? { nome: { [Op.like]: `%${nome}%` } } : undefined,
                email ? { email: { [Op.like]: `%${email}%` } } : undefined,
                papel ? { papel: { [Op.like]: `%${papel}%` } } : undefined
            ].filter(Boolean)
        };

        const usuarios = await Usuarios.findAll({
            where: where,
        });

        return res.send(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Internal Server Error');
    }
}

exports.getUsersById = async (req, res) => {
    try {
        const encontrarUsuario = await Usuarios.findByPk(req.params.id);
        if (!encontrarUsuario) {
            return res.status(404).send('Usuario not found');
        }
        return res.send(encontrarUsuario);
    } catch (error) {
        return res.status(500).send('Internal Server Error');
    }
}

exports.createUsuario = async (req, res) => {
    const verificacao = await Usuarios.findOne({ where:  { email: req.params.email}})

    if (verificacao){
        return res.send ('usuario ja foi cadastrado')
    }

    const usuarioCriado = await Usuarios.create(req.body)
    console.log(usuarioCriado)
    return res.send('usuario cadastrado com sucesso')
}

exports.deleteUsuario = async (req, res) => {
    const encontrarUsuario = await Usuarios.findOne({ where: { id: req.params.id } })
    try {
        await encontrarUsuario.destroy();
        return res.send('usuario deletado')
    } catch (error) {
        return res.send('deu erro aqui fi', error)
    }
}

exports.updateUsuario = async (req, res) => {
    const ID = req.params.id
    const idUsuario = await Usuarios.findOne({ where: { id: ID } }) // encontra um usuario a partir do id
    if (idUsuario) {
        try {
            console.log('test')

            const [Updates] = await Usuarios.update(req.body, { where: { id: req.params.id } }) // verifica se tem alguma alteração
            return res.send({ message: 'Usuario foi atualizado ;P', })

        } catch (error) {
            res.send('deu erro aqui parcero ==> ', error)
        }
    }
    res.send('Usuario não encontrado')
}