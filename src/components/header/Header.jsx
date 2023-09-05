import React from 'react'
import './header.css';
import { CTA } from './CTA';
import taniya from '../../assets/about.jpg'
import { HeaderSocial } from './HeaderSocial';

export const Header = () => {
  return (
    <div>
        <header>
          <div className="container header__container">
            <h5>Hello</h5>
            <h1>Taniya Anil Maurya</h1>
            <h5 className='.text-light'>Frontend Developer</h5>
            <CTA/>
            <HeaderSocial/>
            <div className="me">
              <img src={taniya} alt="taniya" />
            </div>

          </div>
        </header>
    </div>
  )
}
