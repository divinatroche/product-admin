import React from 'react'

const ProductForm = () => {
  return (
  <div className='col-6 mx-auto'>
    <h1> -Admin Products-</h1>
      <form>
        <label htmlFor=''className='form-label'> Title:</label>
        <input type="text" className='form-control'></input>
        <label htmlFor='' className='form-label'> Price:</label>
        <input type="number" className='form-control'></input>
        <label htmlFor='' className='form-label'> Description:</label>
        <input type="text" className='form-control'></input>
        <button className='btn btn-success mt-3'> Crear Serie</button>
      </form>
  </div>
  )
}

export default ProductForm