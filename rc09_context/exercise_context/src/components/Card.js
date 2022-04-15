import React, { useContext } from 'react'
import { IoShirtOutline } from "react-icons/io5";
import { AiFillShopping } from "react-icons/ai";
import CartContext from '../CartContext';
import "./Card.css"

const Card = ({ name, price }) => {
    const {addToCart} = useContext(CartContext);

  return (
    <div className="pro">
    <div className="card" onClick={()=>addToCart(name,price)}>
        <div className="product-box">
            <IoShirtOutline className='shirt'/>
        </div>
        <div className="purchase">
            <h3>{name}</h3>
            <AiFillShopping/>
        </div>
        <h4>€{price}</h4>
    </div>
    </div>
  )
}

export default Card