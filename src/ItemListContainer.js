import ItemList from './ItemList';
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { toast } from 'react-toastify';
import Loading from './Loading';
import {db} from './Firebase'
import { getDocs, collection, query, where } from 'firebase/firestore'
const ItemListContainer = () => {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const coleccion = collection(db, 'productos')
        const documentos = getDocs(coleccion)
if (!id){

    documentos
    .then((docs) => {
        const aux = []

        docs.forEach((doc) => {
            const item = {
                id: doc.id,
                ...doc.data()
            }
            aux.push(item)
            setProductos(aux)
        })
    })
    .catch(() => {
        toast.error('Error al cargar los productos')
    }).finally(() => {
        setLoading(false)
    })
} else{
    const coleccion = collection(db, 'productos')
const filtro = query(coleccion, where("category", "==", id))
    const documentos = getDocs(filtro)
    documentos
    .then((docs) => {
        const aux = []

        docs.forEach((doc) => {
            const item = {
                id: doc.id,
                ...doc.data()
            }
            aux.push(item)
            setProductos(aux)
        })
    })
    .catch(() => {
        toast.error('Error al cargar los productos')
    }).finally(() => {
        setLoading(false)
    })
}
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