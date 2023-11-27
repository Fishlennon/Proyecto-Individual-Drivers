import { useState, useEffect  } from 'react'
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Home from './components/Home'
import Detail from './components/Detail';
import Form from './components/Form';
import Nav from './components/Nav';





function App() {
  

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element = {<Landing/>}/>
      <Route path='/home/:id' element = {<Detail/>}/>
      <Route path='/form' element = {<Form/>}/>
      {/* <Route path='/home' element = {<Home/>}/>
      <Route path='/home' element = {<Home/>}/> */}
    </Routes>
    </>
  )
}

export default App
