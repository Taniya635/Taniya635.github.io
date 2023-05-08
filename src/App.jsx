import React from 'react'
import { Header } from './components/header/Header'
import { Navbar } from './components/nav/Navbar'
import { About } from './components/about/About'
import { Home } from './components/home/Home'
import { Skills } from './components/skills/Skills'
import { Project } from './components/project/Project'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'

export const App = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}
