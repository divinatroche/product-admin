import React, {useState} from 'react'
import axios from 'axios';

const ProductForm = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const [errors, setErrors] = useState({})

  const submitHandler = (e) =>{
    e.preventDefault()
    axios.post('http://localhost:8000/api/newProduct', {
        title,
        price,
        description

    }).then((res)=>{
        console.log(res, "LLega por THEN");
        //navigate('/todaseries')
    }).catch((err)=>{
        console.log(err, "LLEGA POR CATCH")
        setErrors(err.response.data.errors)
    })
}

  return (
  <div className='col-6 mx-auto'>
    <h1> -Admin Products-</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor=''className='form-label'> Title:</label>
        <input type="text" className='form-control' onChange={(e)=>setTitle(e.target.value)}></input>
        <label htmlFor='' className='form-label'> Price:</label>
        <input type="number" className='form-control'  onChange={(e)=>setPrice(e.target.value)}></input>
        <label htmlFor='' className='form-label'> Description:</label>
        <input type="text" className='form-control'  onChange={(e)=>setDescription(e.target.value)}></input>
        <button className='btn btn-success mt-3'> Crear Serie</button>
      </form>
  </div>
  )
}

export default ProductForm