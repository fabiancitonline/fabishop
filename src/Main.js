import ItemListContainer from './ItemListContainer'
import { Routes,  Route} from "react-router-dom";

import Carrito from './Carrito'
import ItemDetailContainer from './ItemDetailContainer';
const Main = () => {
    return (
        <main className='container'>
<Routes>
<Route path="/" element={<ItemListContainer />}/>
<Route path="/categories/:id" element={<ItemListContainer/>}/>
<Route path="/carrito" element={<Carrito/>}/>
<Route path="/item/:id" element={<ItemDetailContainer/>}/>
</Routes>
</main>
    )
}

export default Main