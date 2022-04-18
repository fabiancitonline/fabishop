import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify';


const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const prods = fetch(id ? `https://fakestoreapi.com/products/category/${id}` : 'https://fakestoreapi.com/products')
        prods.then((respuestaApi) => {
            return respuestaApi.json()
        })
            .then((datos) => {
                setProductos(datos)
            }

            ).catch((errorApi) => {
                toast.error('Error al cargar los productos')
            }
            ).finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <> {loading &&
            <p className='carga'>{loading ? <img src="loading.gif" alt="Loading"></img> : ''}</p>
          }
     {!loading &&
            <ItemList productos={productos}></ItemList>
        }
        </>
    )
}
export default ItemListContainer