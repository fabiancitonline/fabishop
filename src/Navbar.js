import {useState, useEffect} from 'react'
import {toast} from 'react-toastify'
import {useParams} from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
const [cat, setCat] = useState([])
const {id} = useParams()

useEffect(()=>{
    const cats = fetch('https://fakestoreapi.com/products/categories')
    cats.then((respuestaApi) => {
      console.log(respuestaApi)
        return respuestaApi.json()
})
.then((datos) => {
    setCat(datos)
    console.log(datos)}
    ).catch((errorApi) => {
        toast.error('Error al cargar categorías')
    }
    )
}, [id])

  return (
    <nav>
    {cat.map((cat) => {
    return <NavLink to={`/categories/${cat}`} key={cat}>{cat}</NavLink>
            }
            )}
   </nav>
  )}

export default Navbar
//   return (
//       <>
//             <p className='carga'>{loading ? <img src="./loading.gif" alt="Loading"></img> : ''}</p>
// <h2>{item.title}</h2>
// <p>{item.category}</p>
// <img src={item.image} width='200' height='300' alt=''/>
// <p>{item.description}</p>
// <p>Precio: ${item.price}</p>
//     </>
//   )
// }