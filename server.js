

(async () => {
    const Usuarios = require('./config/Usuarios')
    await Usuarios.sync();
})();
  