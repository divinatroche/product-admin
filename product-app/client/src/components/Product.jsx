import axios from 'axios'
import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from "react-router-dom";

const Product = () => {
    const [product, setProduct] = useState ({})
    const navigate = useNavigate();
         // obtener id de url
         const {id} = useParams()
         useEffect(()=>{
            axios.get(`http://localhost:8000/api/getProduct/${id}`)
            .then((res)=>{
                setProduct(res.data)
            }).catch((err)=>{
                console.log(err)
            })
        }, [])

        const deleteHandler =()=>{
            axios.delete(`http://localhost:8000/api/deleteProduct/${id}`)
            .then((res)=>{
                navigate('/allproducts')
             }).catch((err)=>{
                 console.log(err)
             })
        }

  return (
    <div className='col-6 mx-auto'>
        <p> Titile: {product.title}</p>
        <p> Price: {product.price}</p>
        <p> Description: {product.description}</p>
        <Link to={`/updateproduct/${id}`}> Update Product </Link>
        <button className="btn btn-danger" onClick={deleteHandler}>Delete Serie</button>
    </div>
  )
}

export default Product