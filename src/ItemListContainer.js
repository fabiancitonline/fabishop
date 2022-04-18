import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify';
import Loading from './Loading';

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
            <Loading></Loading>
          }
     {!loading &&
            <ItemList productos={productos}></ItemList>
        }
        </>
    )
}
export default ItemListContainer