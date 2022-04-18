import Navbar from "./Navbar";
import {Link} from 'react-router-dom'
function Header(){
return <header id="main-header">
<Link to="/"><h1>FabiShop</h1></Link>
<Navbar />
</header>
}

export default Header;