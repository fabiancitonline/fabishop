import React, { useContext } from 'react'
import { BiCartAlt } from "react-icons/bi";
import { NavLink } from 'react-router-dom'
import { context } from './CartContext'

function CartWidget() {
  const {carrito} = useContext(context)
  return (
    <NavLink to="/carrito">
       <BiCartAlt id="cartIcon"/>{carrito.length}
    </NavLink>
  )
  }

export default CartWidget