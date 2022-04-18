import { useState } from 'react'

const Contador = (props) => {
    const [counter, setCounter] = useState(props.inicial)
    const [cantidad, setCantidad] = useState(props.cant)
    const sumar = () => {
        if (counter >= props.cant) {
            alert('No hay más productos')
        } else {
            setCounter(counter + 1)
            setCantidad(cantidad - 1)
        }
    }
    const restar = () => {
        if (counter > 0) {
            setCounter(counter - 1)
            setCantidad(cantidad + 1)

        }
    }
    const resetear = () => {
        if (counter > 0) {
            setCounter(props.inicial)
            setCantidad(props.cant)
        }
    }
    return (
        <div>
            <h1>Contador</h1>
            <p>El tema actual es: dark</p>
            <p>La cuenta va en: {counter}</p>
            <p>La cantidad de productos disponibles es: {cantidad}</p>
            <button onClick={restar}>Restar</button>
            <button onClick={sumar}>Sumar</button>
            <button onClick={resetear}>Reset</button>
        </div>
    )
}

export default Contador