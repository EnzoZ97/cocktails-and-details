import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAppSelector } from './app/hooks';

import Navbar from './components/Navbar/Navbar';
import Cocktails from './components/Cocktails/Cocktails';
import More_Information from './components/More_Information/More_Information';

import './App.scss';

function App() {
  const url_Name = useAppSelector((state) => state.url_Name.value);
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Cocktails />} />
          <Route path={`/${url_Name}`} element={<More_Information />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
