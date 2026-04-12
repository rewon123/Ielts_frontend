import { useState } from 'react'
import Home from './pages/Home/Home.jsx';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import IeltsListening from './pages/freeClass/IeltsListening.jsx';

function App() {

  return (
    <>

      <div className="" style={{ padding: 0, margin: 0 }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Freeclass/IeltsListening" element={<IeltsListening />} />
        </Routes>


      </div>
    </>

  )
}

export default App
