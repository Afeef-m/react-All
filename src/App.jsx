import React from 'react'
import {Routes,Route}from "react-router-dom"

import Navbar from './components/navbar&footer/navbar'
import Home from './components/home'
import HCounter from './addHook/h-counter'
import OddEven from './addHook/oddeven'
import Todo from './pages/todo'
import Counter from './pages/counter'
import Timer from './pages/timer'
import Input from './pos-neg/input'
import Login from './components/auth/login'
import Register from './components/auth/register'

function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/timer' element={<Timer/>}/>
      <Route path='/todo' element={<Todo/>}/>
      <Route path='/oddeven' element={<OddEven/>}/>
      <Route path='/h-counter' element={<HCounter/>}/>
      <Route path='/input' element={<Input/>}/>
    </Routes>
   
   
    </>
  )
}

export default App
