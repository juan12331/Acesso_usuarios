const Sequelize = require('sequelize')
const database = require('./sequelize')
const { default_type } = require('mime')

const usuarios = database.define('usuarios', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        AllowNUll: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        AllowNUll: false,
    },
    email : {
        type: Sequelize.STRING,
        AllowNUll: false
    },
    senha: {
        type: Sequelize.STRING(45),
        AllowNUll: false
    },
    papel: {
        type: Sequelize.ENUM('user', 'adm'),
        defaultValue: 'user',
        AllowNUll: false
    }
});


module.exports = usuarios