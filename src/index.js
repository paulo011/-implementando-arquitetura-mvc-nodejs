const { urlencoded } = require('express');
const express = require('express')
const path = require('path')
const  port = '5000'

//Controladores

const ProductController = require ('./controllers/ProductController')
const HomeController = require ('./controllers/HomeController')

//configurações do serviço 
const app = express();
app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.urlencoded())

//Rotas 
app.get('/',HomeController.home)
app.get('/products', ProductController.list)
app.get('/products/form', ProductController.form)
app.post('/products/create', ProductController.create)

//Executar o serviço
app.listen(port, ()=> {
    console.log(`servidor rodando! na porta http://localhost:${port}`)
})