import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
