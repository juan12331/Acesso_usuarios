const express = require('express')
const sequelize = require('./config/sequelize')
const cors = require('cors')
const router = require('./routes/router')
const usuarios =require('./models/Usuarios')
usuarios.sync()





const app = express()

app.use(express.json())
app.use(router);
app.use(cors());






app.listen(3001, () => console.log('servidor rodando na porta 3001'))