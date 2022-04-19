import { useState, useContext } from 'react'
import { toast } from 'react-toastify'
import { context } from './CartContext'

const ItemCount = ({ cant, inicial, onAdd }) => {
    const [counter, setCounter] = useState(inicial)

    const resultado = useContext(context)

    const sumar = (e) => {
        if (counter >= cant) {
            toast.error('No hay más productos')
        } else {
            setCounter(counter + 1)
        }
    }
    const restar = (e) => {
        if (counter > 1) {
            setCounter(counter - 1)

        }
    }
    const confirmar = (e) => {
        onAdd(counter)
    }
    return (
        <div>
            <hr></hr>
            <p>Cantidad: {counter}</p>
            <p>Stock: {cant}</p>
            <button onClick={restar}>Restar</button>
            <button onClick={confirmar}>Confirmar</button>
            <button onClick={sumar}>Sumar</button>
        </div>
    )
}

export default ItemCount