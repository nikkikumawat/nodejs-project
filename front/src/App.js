import React from 'react'
import {BrowserRouter,Routes,Route}  from  "react-router-dom"
import Home from './Home';
import Loginn from './Loginn';
import Quiz from "./Quiz"
import Header from './Header';
import { useState } from 'react';
import Final from './Final';
import { createContext } from 'react';

export const finalresult = createContext();


function App() {

  const [right, setright] = useState(0)
  const [wrong, setwrong] = useState(0)

  return (
    <>
    <finalresult.Provider value={{right,setright,wrong,setwrong}}>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/login" element={<Loginn />}></Route>
        <Route  path="/quiz" element={<Quiz />}></Route>
        <Route  path="/final" element={<Final />}></Route>
    </Routes>
    </BrowserRouter>
    </finalresult.Provider>
    </>
  )
}

export default App