import React, { Fragment, useState } from 'react'
import './Create.css'
import Header from '../Header/Header'
function Create() {
const [name,setName] = useState('')
const [category,setCategory] = useState('')
const [price,setPrice] = useState('')
const [image,setImage] = useState('')

const handleSubmit=()=>{
  
}
  return (
    <>
    <div>
        <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              value={category}
              onChange={(e)=>setCategory(e.target.value)}
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" value={price} onChange={(e)=>setPrice(e.target.value)} id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ?URL.createObjectURL(image):''}></img>
          <form>
            <br />
            <input onChange={(e)=>setImage(e.target.files[0])} type="file" />
            <br />
            <button onClick={handleSubmit} className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </div>
    </>
  )
}

export default Create
