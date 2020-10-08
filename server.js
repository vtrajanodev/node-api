const express = require('express')
const app = express()
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')
const bodyParser = require('body-parser')


app.use(express.json())
app.use(cors());




app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//Iniciando database
mongoose.connect('mongodb+srv://deploy:3966120vic@dbproduct.xw0dz.mongodb.net/dbproducts?retryWrites=true&w=majority' , 
{useNewUrlParser: true , useFindAndModify: false  , useUnifiedTopology: true})


//Requisitando os diretórios do DB
requireDir('./src/model/')

//Definição das rotas
app.use('/api' , require('./src/routes'))


//Iniciando servidor
app.listen(process.env.PORT || 12345)
