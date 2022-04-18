const Detalle = ({props}) => {
    return (
        <div>
            <h1>Detalle</h1>
            <p>El articulo es: {props.nombre}</p>
            <p>El precio es: {props.precio}</p>
        </div>
    )
}

export default Detalle