
import React, {useState,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const UpdateProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
  
    const [errors, setErrors] = useState({})


    const {id} = useParams()
    const navigate = useNavigate();



    useEffect(() => {
        axios.get(`http://localhost:8000/api/getProduct/${id}`)
        .then((res)=>{
            console.log(res)
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])


    const submitHandler = (e) =>{
      e.preventDefault()
      axios.put(`http://localhost:8000/api/updateProduct/${id}`, {
          title,
          price,
          description
  
      }).then((res)=>{
        navigate('/allproducts')
          console.log(res, "LLega por THEN");
      }).catch((err)=>{
          console.log(err, "LLEGA POR CATCH")
          setErrors(err.response.data.errors)
      })

    }

  return (
    <div className='col-6 mx-auto'>
    <h1>Update Product</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor=''className='form-label'> Title:</label>
        <input type="text" value={title}  className='form-control' onChange={(e)=>setTitle(e.target.value)}></input>
        <label htmlFor='' className='form-label'> Price:</label>
        <input type="number" className='form-control'  value={price} onChange={(e)=>setPrice(e.target.value)}></input>
        <label htmlFor='' className='form-label'> Description:</label>
        <input type="text" className='form-control'  value={description} onChange={(e)=>setDescription(e.target.value)}></input>
        <button className='btn btn-success mt-3'> Update Product</button>
      </form>
  </div>
  )
}

export default UpdateProduct