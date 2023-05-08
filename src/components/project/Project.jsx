import React from 'react'
import './project.css'
import expedia from '../../assets/expedia.png'
import dsw from '../../assets/dsw.png'
import lr from '../../assets/limeroad.png'
import bmi from '../../assets/bmi.png'


export const Project = () => {
  return (
    <section id='project'>
      <h2>My Projects</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={expedia} alt="expedia" />  
        </div>
        <h3>Clone of Expedia Travels</h3>
        <p>This site is related to booking flights and hotels with variety of options available. This website is designed to make bookings easily just by sitting at our homes.</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/Clone-of-Expedia-Travels" className='btn' target='_blank'>GitHub</a>
          <a href="https://serene-valkyrie-bab7f5.netlify.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={dsw} alt="expedia" />  
        </div>
        <h3>Clone of DSW</h3>
        <p>Welcome to First Step, an ecommerce website for purchasing footwear. Our website is designed to make it easy for you to browse and purchase a wide variety of shoes, from casual to formal, at competitive prices.</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/Clone-of-DSW" className='btn' target='_blank'>GitHub</a>
          <a href="https://loquacious-salamander-dabbff.netlify.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={lr} alt="expedia" />  
        </div>
        <h3>Clone of Limeroad</h3>
        <p>Limeroad is an e-commerce website based on fashion related products like clothes, make-up,etc.</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/Clone-of-Limeroad" className='btn' target='_blank'>GitHub</a>
          <a href="https://limeroad-taniyamaurya.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={bmi} alt="expedia" />  
        </div>
        <h3>BMI calculator</h3>
        <p>This calculator is designed usin chakra UI and functionalities has been added by using the concepts of React JS.</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/BMI-calculator" className='btn' target='_blank'>GitHub</a>
          <a href="https://bmi-calculator-a1bntdkke-taniyamaurya.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>


      </div>
    </section>
  )
}
