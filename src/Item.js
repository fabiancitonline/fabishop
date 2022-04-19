import React from 'react'
import {Link} from 'react-router-dom'
const Item = ({producto}) => {
  return (
<article>
<h2>{producto.name}</h2>
<img src={producto.image} width='200' height='300' alt=''/>
<p>Precio: ${producto.price}</p>
<button>
    <Link to={`/item/${producto.id}`}>Detalle</Link>
</button>
</article>
    )
}

export default Item