const mongoose = require('mongoose')

// Schema MODELO aka Tabla aka Colection
const ProductSchema = mongoose.Schema({
    title:String,
    price:Number,
    description:String
})

const Products  = mongoose.model('Product', ProductSchema)

module.exports = Products