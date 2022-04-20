import Navbar from "./Navbar";
import { Link } from 'react-router-dom'
function Header() {
    return <header id="main-header">
        <Link to="/">
            <img alt='logo' src={require('./images/favicon.ico')} />
        </Link>
        <Navbar />
    </header>
}

export default Header;