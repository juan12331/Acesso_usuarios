const express = require('express')
const sequelize = require('./config/sequelize')
const headers = require('./config/headers')
const router = require('./routes/router')
const usuarios =require('./models/Usuarios')
usuarios.sync()





const app = express()

app.use(express.json())
app.use(router);
app.use(headers);






app.listen(3001, () => console.log('servidor rodando na porta 3001'))