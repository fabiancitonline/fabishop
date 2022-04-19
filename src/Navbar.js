import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';

const Navbar = () => {

  // useEffect(() => {
  //   const cats = fetch('https://fakestoreapi.com/products/categories')
  //   cats.then((respuestaApi) => {
  //     return respuestaApi.json()
  //   })
  //     .then((datos) => {
  //       setCat(datos)
  //     }
  //     ).catch((errorApi) => {
  //       toast.error('Error al cargar categorías')
  //     }
  //     )
  // }, [id])

  return (
    <nav>
        <NavLink to={`/categories/men`} >HOMBRE</NavLink>
        <NavLink to={`/categories/women`} >MUJER</NavLink>
        <NavLink to={`/categories/jewelery`} >JOYERÍA</NavLink>
        <NavLink to={`/categories/electro`} >ELECTRÓNICA</NavLink>
      <CartWidget />
    </nav>
  )
}

export default Navbar