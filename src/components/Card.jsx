import React, { useEffect, useRef, useState } from 'react'
import {  useDispatchCart } from './ContextReducer';
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  let options = props.options;
  let priceOptions =Object.keys(options)
  let foodItem = props.FoodItem;
  let dispatch = useDispatchCart();
  const priceRef = useRef();

  const [qty,setqty] = useState(1)
  const [size,setsize] = useState("")
  

  const handleAddToCart = async()=>{
    if(!localStorage.getItem('userEmail')){
      alert("login first");
      navigate("/login");
    }
    await dispatch({type:"ADD",id:foodItem._id,name:foodItem.name,price:finalPrice,qty:qty,size:size})
    
  }

  let finalPrice = qty * parseInt(options[size]);

  useEffect(()=>{
    setsize(priceRef.current.value)
  },[])

  return (
    <>
    <div className="card mt-3 text-center" style={{width: '18rem', maxHeight : '450px',marginLeft:'1%'}}>
  <img className="card-img-top" src={foodItem.img} alt="Card" style={{ maxHeight : '180px',objectFit:'fill'}}/>
  <div className="card-body">
    <h5 className="card-title">{foodItem.name}</h5>
    <p className="card-text"></p>
    <div className='container w-100'>
        <select className='m-2 h-100 bg-success rounded' onChange={(e)=>{setqty(e.target.value)}}>
            {Array.from(Array(5),(e,i)=>{
                return(
                    <option key={i+1} value={i+1}>{i+1}</option>
                )
            })}
        </select>
        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e)=>{setsize(e.target.value)}}>
            {priceOptions.map((data)=>{
              return <option key={data} value={data}>{data}</option>
            })}
        </select>
        <div className=' h-100 fs-5'>
        ₹{finalPrice}/-
        </div>
    </div>
    <hr/>
    <button className='btn btn-dark justify-center ms-2 ' onClick={handleAddToCart}>Add to Cart</button>
  </div>
</div>
    </>
  )
}

export default Card
