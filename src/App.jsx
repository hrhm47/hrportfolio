import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ValuePitch from './pages/ValuePitch';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/value" element={<ValuePitch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
