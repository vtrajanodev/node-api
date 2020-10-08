const mongoose = require('mongoose')
const Product = mongoose.model('products')

module.exports = {
    async index(req , res){

        const {page = 1} = req.query
        const showAll = await Product.paginate({} , {page , limit: 10})

        return res.json(showAll)

    } ,
    async getById(req, res){
        const  getByIds = await Product.findById(req.params.id)

        return res.json(getByIds)
    },
    async register(req, res){

        const registerUser = await Product.create(req.body)

        return res.json(registerUser)
    } , 
    async update(req, res){
        const updateUser = await Product.findByIdAndUpdate(req.params.id , req.body , {new: true})

        return res.json(updateUser)
    },
    async delete(req, res){
        await Product.findByIdAndDelete(req.params.id)

        return res.json('Usuário deletado com sucesso!!')
    }

}