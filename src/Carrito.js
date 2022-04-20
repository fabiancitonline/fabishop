import { useContext } from 'react'
import { context } from './CartContext'
import { db } from './Firebase'
import { toast } from 'react-toastify';
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

const Carrito = () => {

    const { carrito, borrarProducto, total, limpiarProductos } = useContext(context)

    const confirmacion = () => {
        const compra = {
            comprador: {
                nombre: "USUARIO",
                telefono: "123456789",
                email: "usuario@fabishop.com"
            },
            items: carrito,
            date: serverTimestamp(),
            total: total
        }
        const compras = collection(db, "comprasconfirmadas")
        const buy = addDoc(compras, compra)
        buy
            .then(res => {
                toast.success(`Su compra de $${total} fue realizada con exito`)
                limpiarProductos(false)
            })
    }
    return (
        <>
            <h2>Carrito</h2>
            <hr></hr>
            {
                carrito.map(producto => (
                    <div key={producto.id}>
                        <h5>{producto.name}</h5>
                        <img src={producto.image} width='200' height='300' alt='' />
                        <p>Precio: ${producto.price} x {producto.cant} {producto.cant > 1 ? 'unidades' : 'unidad'}</p>
                        <button onClick={() => borrarProducto(producto.id)}>Borrar</button>
                        <hr></hr>

                    </div>
                ))
            }
            <h2>Total : ${total}</h2>
            {total > 0 &&<button onClick={confirmacion}>Confirmar Compra</button>}
            {total > 0 &&<button onClick={limpiarProductos}>Vaciar Carrito</button>}
        </>
    )
}

export default Carrito