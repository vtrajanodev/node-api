const express = require('express')
const app = express()
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')


app.use(express.json())
app.use(cors());

//Iniciando database
mongoose.connect('mongodb://localhost:27017/newbackend' , 
{useNewUrlParser: true , useFindAndModify: false  , useUnifiedTopology: true})

//Requisitando os diretórios do DB
requireDir('./src/model/')

//Definição das rotas
app.use('/api' , require('./src/routes'))


//Iniciando servidor
app.listen(process.env.PORT || 3000)