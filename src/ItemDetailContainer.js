import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from './Loading'
import ItemDetail from './ItemDetail'
const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const pedido = fetch(`https://fakestoreapi.com/products/${id}`)
        pedido.then((respuestaApi) => {
            return respuestaApi.json()
        })
            .then((dato) => {
                setItem(dato)
            }

            ).catch((errorApi) => {
                toast.error('Error al cargar los productos')
            }
            ).finally(() => {
                setLoading(false)
            })
    }, [id])
    return (
        <div> {loading &&
            <Loading></Loading>}
            {!loading &&
                <>
                <ItemDetail item={item}>

                </ItemDetail>
                    </>
            }
        </div>
    )
}

export default ItemDetailContainer