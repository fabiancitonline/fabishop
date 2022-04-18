import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';

function App(){
    return <BrowserRouter>
        <Header />
        <Main nombre='Fabi' apellido='Bariandaran'/>
        <Footer />
        <ToastContainer></ToastContainer>
    </BrowserRouter>
}

export default App;