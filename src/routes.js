const express = require('express')

const routes = express.Router()

const ProductController = require('./controller/ProductController')


routes.get('/' , ProductController.index)
routes.get('/products/:id' , ProductController.getById)
routes.post('/products' , ProductController.register) 
routes.put('/products/:id' , ProductController.update)
routes.delete('/products/:id' , ProductController.delete)

module.exports = routes;