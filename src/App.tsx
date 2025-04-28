// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SharedTrans from './pages/sharedTrans'
import Home from './pages/home'
import './App.css';
import ErrorPage from './pages/errorPage';
import PrivacyPolicy from './pages/privacyPolicy';
import DeleteAccount from './pages/deleteAccount';

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

          <Route
            path='/privacy-policy'
            element={<PrivacyPolicy />}
          />

          <Route
            path='/delete-account'
            element={<DeleteAccount />}
          />

          <Route
            path='*'
            element={<ErrorPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
