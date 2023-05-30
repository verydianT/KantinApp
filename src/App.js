import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './WelcomePage';
import { Home, Toko, Rekomendasi, Keranjang } from './Pages';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Toko" element={<Toko/>} />
        <Route path="/Rekomendasi" element={<Rekomendasi/>} />
        <Route path="/Keranjang" element={<Keranjang/>} />
      </Routes>
    </div>
  )
}

export default App