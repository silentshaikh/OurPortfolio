import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About'
import Skill from './Skill/Skill'
import Project from './Project/Project'
import Contact from './Contact/Contact'
import Error from './Error/Error'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skill' element={<Skill/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
