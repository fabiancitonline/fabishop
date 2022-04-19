import {useContext} from 'react'
import { context } from './CartContext'

const Carrito = () => {

  const {carrito,borrarProducto,total, limpiarProductos} = useContext(context)
  
  const handleClick = () => {
  }
  return (
    <>
<h2>Carrito</h2>
<hr></hr>
            {
                carrito.map(producto => (
                    <div key={producto.id}>
                        <p>{producto.title}</p>
                        <img src={producto.image} width='200' height='300' alt=''/>
                        <p>{producto.price} x {producto.cant}</p>
                        <button onClick={()=>borrarProducto(producto.id)}>Borrar</button>
                        <hr></hr>

                    </div>
                ))
            }
            <p>Total : ${total}</p>
            <button onClick={handleClick}>Confirmar Compra</button>
            <button onClick={limpiarProductos}>Vaciar Carrito</button>
        </>
  )
}

export default Carrito