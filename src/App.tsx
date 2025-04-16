// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedTrans from './pages/sharedTrans'
import Home from './pages/home'
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <Home />
            }
          />

          <Route
            path='/shared/:token'
            element={<SharedTrans />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
