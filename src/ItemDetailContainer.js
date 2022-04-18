import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {toast} from 'react-toastify'
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
     <p className='carga'>{loading ? <img src="loading.gif" alt="Loading"></img> : ''}</p>}
{!loading &&
<>
<h2>{item.title}</h2>
<p>{item.category}</p>
<img src={item.image} width='200' height='300' alt=''/>
<p>{item.description}</p>
<p>Precio: ${item.price}</p>
</>
}
    </>
  )
}

export default ItemDetailContainer