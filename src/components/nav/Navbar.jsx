import React, { useState } from 'react'
import './navbar.css'
import {HiHome} from 'react-icons/hi'
import {MdContactPage} from 'react-icons/md'
import {SiBookstack} from 'react-icons/si'
import {BsStack} from 'react-icons/bs'
import {RiMessage2Fill} from 'react-icons/ri'

export const Navbar = () => {
  const [activeNav,setActiveNav]=useState('#')

  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav("#")}  className={activeNav==='#'? "active" : ""}> <HiHome/> </a>
      <a href="#about" onClick={()=>setActiveNav("#about")}  className={activeNav==='#about'? "active" : ""}> <MdContactPage/> </a>
      <a href="#skills" onClick={()=>setActiveNav("#skills")}  className={activeNav==='#skills'? "active" : ""}> <SiBookstack/> </a>
      <a href="#project" onClick={()=>setActiveNav("#project")}  className={activeNav==='#project'? "active" : ""}> <BsStack/> </a>
      <a href="#contact" onClick={()=>setActiveNav("#contact")}  className={activeNav==='#contact'? "active" : ""}> <RiMessage2Fill/> </a>
    </nav>
  )
}
