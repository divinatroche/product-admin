const ProductController = require('../controllers/product.controllers')

module.exports = (app) =>{
    app.get('/api/getProducts', ProductController.getProducts) 
    app.get('/api/getProduct/:id', ProductController.getProduct) 
    app.post('/api/newProduct', ProductController.newProduct) 
    app.put('/api/updateProduct/:id', ProductController.updateProduct)
    app.delete('/api/deleteProduct/:id', ProductController.deleteProduct)
}

