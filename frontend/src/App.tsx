import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginWithGoogle from './pages/Login'
import Success from './pages/success'; // Correctly import the Success component
import Dashboard from './pages/Dashboard';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' Component = {Dashboard}/>
        <Route path='/login' Component = {LoginWithGoogle}/>
        <Route path='api/v1/auth/success' Component = {Success}/>
      </Routes>
    </>
  )
}
