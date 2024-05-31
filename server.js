

(async () => {
    const Usuarios = require('./config/Usuarios') // chamamos para o sync saber que é essa tabela que precisa ser criada
    const sequelize = require('./config/sequelize') // esse é o database
    await sequelize.sync(); //O sync verifica se existe uma tabela Usuarios no banco de dados e se não existir ele cria uma com as informações de usuarios


    const novoUsuario = await Usuarios.create({
        nome: 'juan',
        email: 'juan1402@gmail.com',
        senha: 'uncknow-password'
})
})();
  