import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Artworks from "./Artworks";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="artworks" element={<Artworks />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
