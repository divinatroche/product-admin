import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    const [product, setProduct] = useState ({})
         // obtener id de url
         const {id} = useParams()
console.log(id)
         useEffect(()=>{
            axios.get(`http://localhost:8000/api/getProduct/${id}`)
            .then((res)=>{
                setProduct(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }, [])

  return (
    <div className='col-6 mx-auto'>
        <p> Titile: {product.title}</p>
        <p> Price: {product.price}</p>
        <p> Description: {product.description}</p>
    </div>
  )
}

export default Product