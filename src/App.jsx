import React from "react";
import Home from "./pages/Home";  
import Men from "./pages/Men";
import Women from "./pages/Women";
import Living from "./pages/Living";
import Beauty from "./pages/Beauty";
import Kids from "./pages/Kids";
import Studio from "./pages/Studio";
import Header from "./components/Header";
import Wishpage from "./pages/wishpage";
import Productdetails from "./pages/Productdetails";
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
import Footer from "./components/Footer";
import CartPage from "./pages/Cart";
import Productlist from "./pages/Productlist";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Living" element={<Living />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Beauty" element={<Beauty />} />
        <Route path="/Studio" element={<Studio />} />
        <Route path="/Wishpage" element={<Wishpage />} />
        <Route path="/Productdetails/:slug" element={<Productdetails/>}  />
        <Route path="/Productlist/:name" element={<Productlist/>} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
