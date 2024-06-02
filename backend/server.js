const express = require('express')
const sequelize = require('./config/sequelize')
const router = require('./routes/router')
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(router);

app.listen(3001, () => console.log('servidor rodando na porta 3001'))