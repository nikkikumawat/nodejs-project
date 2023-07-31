import React from 'react'
import {BrowserRouter,Routes,Route}  from  "react-router-dom"
import Home from './Home';
import Loginn from './Loginn';
import Quiz from "./Quiz"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/login" element={<Loginn />}></Route>
        <Route  path="/quiz" element={<Quiz />}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App