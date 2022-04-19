import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const context = createContext();
const { Provider } = context;

const MiProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadActual, setCantidadActual] = useState(0)

    useEffect(() => {
        calcularTotal()
      }, [carrito]);

    const borrarProducto = (id) => {
        if (existe(id)) {
            const carritoAux = carrito.filter(item => item.id !== id);
            setCarrito(carritoAux)
        }

    }

    const calcularTotal = () => {          
        let totalAux = 0
        carrito.map(p => {
            totalAux = totalAux + (p.price * p.cant);
        })
        setTotal(totalAux)
    }

    const agregarProducto = (item, cant) => {
        setCarrito([...carrito, { ...item, cant }])
        setTotal(total + item.price * cant)
        setCantidadActual(cantidadActual + cant)
    }
    const limpiarProductos = () => {
        toast.info('Vaciaste el carrito')
        setCarrito([]);
        setTotal(0);
    }
    const existe = (id) => {
        return carrito && carrito.some(item => item.id === id)
    }
    const valorContext = {
        carrito,
        borrarProducto,
        agregarProducto,
        total,
        limpiarProductos,
    }
    return (
        <Provider value={valorContext}>
            {children}
        </Provider>
    )
}

export default MiProvider;