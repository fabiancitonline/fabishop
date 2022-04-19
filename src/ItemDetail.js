import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import {context} from './CartContext'
import {Link, useNavigate} from 'react-router-dom'

const ItemDetail = ({item}) => {
    const [seleccion, setSeleccion] = useState(false)
    const {agregarProducto} = useContext(context)
    const navigate = useNavigate()


    const onAdd = (unidades) => {
        if (unidades !== undefined) {
          setSeleccion(unidades)
        }
      }
    const handleClick = (e) => {
        e.preventDefault()
        agregarProducto(item,seleccion)
        navigate("/carrito")
      }
    return (
        <div>
            <h2>{item.title}</h2>
                    <h3>Categoría: {item.category}</h3>
                    <img src={item.image} width='200' height='300' alt='' />
                    <p>{item.description}</p>
                    <h4>Precio: ${item.price}</h4>
                    {!seleccion ? <ItemCount cant={10} inicial={1} onAdd={onAdd}></ItemCount> : null}
                    {seleccion &&
                        <p>Agregaste: {seleccion} unidades</p>
                    }{seleccion ? <button><Link onClick={handleClick}to="/carrito">Ir al carrito</Link></button> : null}
        </div>
    )
}

export default ItemDetail