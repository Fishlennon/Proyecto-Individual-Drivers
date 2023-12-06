import { useState, useEffect  } from 'react'
import axios from 'axios';
import {Routes, Route, useNavigate} from 'react-router-dom'
import './App.css'
import Landing from './views/landing/Landing'
import Home from './views/home/Home'
import Detail from './views/detail/Detail';
import Form from './views/form/Form';
import Nav from './components/nav/Nav';
import Delete from './views/delete/delete';





function App() {


  

  return (
    <div className='root-app'>
    <Nav/>
    <Routes>
      <Route path='/' element = {<Landing/>}/>
      <Route exact path='/home' element = {<Home/>}/>
      <Route path='/home/:id' element = {<Detail/>}/>
      <Route path='/form' element = {<Form/>}/>
      <Route path='/delete' element = {<Delete/>}/>
    </Routes>
    </div>
  )
}

export default App
