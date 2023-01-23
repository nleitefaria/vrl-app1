import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Artworks from "./Artworks";
import Products from "./Products";
import Tours from "./Tours";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="artworks" element={<Artworks />} />
              <Route path="products" element={<Products />} />
              <Route path="tours" element={<Tours />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
