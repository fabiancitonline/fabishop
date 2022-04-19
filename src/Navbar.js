import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';

const Navbar = () => {
  const [cat, setCat] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const cats = fetch('https://fakestoreapi.com/products/categories')
    cats.then((respuestaApi) => {
      return respuestaApi.json()
    })
      .then((datos) => {
        setCat(datos)
      }
      ).catch((errorApi) => {
        toast.error('Error al cargar categorías')
      }
      )
  }, [id])

  return (
    <nav>
      {cat.map((cat) => {
        return <NavLink to={`/categories/${cat}`} key={cat}>{cat.toUpperCase()}</NavLink>
      }
      )}
      <CartWidget />
    </nav>
  )
}

export default Navbar