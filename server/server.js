// CONFIGURACION
const express = require('express')
const app = express()
const PORT = 8000

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// BASE DATOS
require('./config/mongoose.config')

// ENRUTAMIENTO
const ProductRoutes = require('./routes/product.routes')
ProductRoutes(app)

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})