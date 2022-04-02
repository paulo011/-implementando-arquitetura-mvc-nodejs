const product = require('../models/product')

module.exports = {
    create: async (req,res) => {
        await product.create(req.body)
        return res.redirect('/products')
    },
    list: async (_, res) => {
        const products = await product.findAll()
        return res.render('products/list', {products})
    },
    form: (_, res) => res.render('products/form'),
}