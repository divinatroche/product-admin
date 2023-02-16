const Products = require('../models/product.models')



const getProduct = (req, res)=>{
    Products.findById({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const getProducts = (req, res)=>{
    Products.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const newProduct =  (req, res)=>{
    Products.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

const updateProduct = (req, res)=>{
    Products.updateOne({_id: req.params.id}, req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}


const deleteProduct = (req, res)=>{
    Products.deleteOne({_id: req.params.id})
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    getProducts,
    getProduct,
    newProduct,
    updateProduct,
    deleteProduct
}

// OTRA FORMA DE EXPORTAR
/*
    obtenerusuarios: (req, res)=>{
        Usuarios.find(req.body)
        .then((resultado)=>{
            res.json(resultado)
        }).catch((error)=>{
            console.log(error)
        })
    },
 
}
*/