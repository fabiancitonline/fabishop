import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget';

const Navbar = () => {

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