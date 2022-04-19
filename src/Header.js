import Navbar from "./Navbar";
import {Link} from 'react-router-dom'
function Header(){
return <header id="main-header">
<Link to="/"><img src="favicon.ico" alt="logo"/></Link>
<Navbar />
</header>
}

export default Header;