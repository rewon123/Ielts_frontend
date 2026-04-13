import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import IeltsListening from './pages/freeClass/Ielts/IeltsListening';
import IeltsReading from './pages/freeClass/Ielts/IeltsReading';
import IeltsSpeaking from './pages/freeClass/Ielts/IeltsSpeaking';
import IeltsWritingTask1 from './pages/freeClass/Ielts/IeltsWritingTask1';
import IeltsWritingTask2 from './pages/freeClass/Ielts/IeltsWritingTask2';

function App() {

  return (
    <>

      <div className="" style={{ padding: 0, margin: 0 }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Freeclass/IeltsListening" element={<IeltsListening />} />
          <Route path="/Freeclass/IeltsReading" element={<IeltsReading />} />
          <Route path="/Freeclass/IeltsSpeaking" element={<IeltsSpeaking />} />
          <Route path="/Freeclass/IeltsWrittingTask1" element={<IeltsWritingTask1 />} />
          <Route path="/Freeclass/IeltsWritingTask2" element={<IeltsWritingTask2 />} />


        </Routes>


      </div>
    </>

  )
}

export default App
