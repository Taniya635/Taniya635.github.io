import React from 'react'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'

export const HeaderSocial = () => {
  return (
    <div>
        <div className="header__social">
            <a href="https://linked.com" target='blank'><BsLinkedin/></a>
            <a href="https://github.com" target='blank'> <BsGithub/> </a>
            <a href="https://gmail.com" target='blank'> <CgMail/> </a>
        </div>
    </div>
  )
}
