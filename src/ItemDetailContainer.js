import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
import Loading from './Loading'
const ItemDetailContainer = () => {

const [item, setItem] = useState({})
const [loading, setLoading] = useState(true)
const {id} = useParams()

useEffect(()=>{
    setLoading(true)
    const pedido = fetch(`https://fakestoreapi.com/products/${id}`)
    pedido.then((respuestaApi) => {
        return respuestaApi.json()
})
.then((dato) => {
    setItem(dato)}

    ).catch((errorApi) => {
        toast.error('Error al cargar los productos')
    }
    ).finally(() => {
        setLoading(false)
    })
}, [id])

  return (
      <> {loading &&
        <Loading></Loading>}
        {!loading &&
<>
<h2>{item.title}</h2>
<h3>Categoría: {item.category}</h3>
<img src={item.image} width='200' height='300' alt=''/>
<p>{item.description}</p>
<h4>Precio: ${item.price}</h4>
</>
}
    </>
  )
}

export default ItemDetailContainer