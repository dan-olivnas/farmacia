import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormCategorias from './components/categoria/formcategorias/FormularioCategorias';

function App() {
  return (
    <>
    <ToastContainer />
    <BrowserRouter>
      <Navbar />

      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/categorias" element={<ListaCategorias />} />
          <Route path="/editarcategorias/:id" element={<FormCategorias />} />
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
