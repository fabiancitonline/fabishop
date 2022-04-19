import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import Loading from './Loading'
import ItemDetail from './ItemDetail'
import { db } from './Firebase'
import { getDoc, collection, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        setLoading(true)
        const coleccion = collection(db, 'productos')
        const documento = getDoc(doc(coleccion,id))
        documento
            .then((doc) => {
                const item = {
                    id: doc.id,
                    ...doc.data()
                }
                setItem(item)
            })
            .catch(() => {
                toast.error('Error al cargar el producto')
            }).finally(() => {
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