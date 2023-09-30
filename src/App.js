import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/common/navbar/Navbar';
import Catalog from './Components/catalog/Catalog';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/catalog/:category' element={<Catalog/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
