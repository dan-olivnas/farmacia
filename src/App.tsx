import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
//import Categorias from './pages/categorias/Categorias';
import Home from './pages/home/Home';
//import Produtos from './pages/produtos/Produtos';

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
          {/* Route path="/categorias" element={<Categorias />} />
          <Route path="/produtos" element={<Produtos /> */}
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
