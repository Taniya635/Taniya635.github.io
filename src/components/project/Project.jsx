import React from 'react'
import './project.css'
import expedia from '../../assets/expedia.png'
import dsw from '../../assets/dsw.png'
import lr from '../../assets/limeroad.png'
import bmi from '../../assets/bmi.png'
import job from '../../assets/job.png'
import todo from '../../assets/todo.png'
import calculator from '../../assets/calculator.png'
import ketto from '../../assets/ketto.png'


export const Project = () => {
  return (
    <section id='project'>
      <h2>Major Projects</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={expedia} alt="expedia" />  
        </div>
        <h3>Clone of Expedia Travels</h3>
        <p>This site is related to booking flights and hotels with variety of options available. This website is designed to make bookings easily just by sitting at our homes.</p>
        <p>HTML | CSS | JavaScript | Netlify</p>
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
        <p>HTML | CSS | JavaScript | Netlify | Local Storage</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/Clone-of-DSW" className='btn' target='_blank'>GitHub</a>
          <a href="https://loquacious-salamander-dabbff.netlify.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={lr} alt="expedia" />  
        </div>
        <h3>Clone of Zomato</h3>
        <p>Foodfire is a clone of zomato which is an e-commerce site based on food products.</p>
        <p>React js | Redux | JavaScript | Yup | Vercel | Local Storage</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/Clone-of-Zomato" className='btn' target='_blank'>GitHub</a>
          <a href="https://clone-of-zomato-taniyamaurya.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={ketto} alt="expedia" />  
        </div>
        <h3>Clone of Ketto</h3>
        <p>Ketto.org is a fundraiser site used by people to donate money to the needy people.</p>
        <p>React js | Redux | JavaScript | styled-components | Vercel | Local Storage</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/Clone-of-ketto" className='btn' target='_blank'>GitHub</a>
          <a href="https://clone-of-ketto.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        

      </div>

      <h2>Minor Projects</h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={calculator} alt="expedia" />  
        </div>
        <h3>Basic calculator</h3>
        <p>The Basic Calculator is a simple web application designed to perform basic arithmetic operations such as addition, subtraction, multiplication, and division.</p>
        <p>HTML | CSS | JavaScript | Netlify</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/Basic-calculator" className='btn' target='_blank'>GitHub</a>
          <a href="https:calculator-bmi-taniyamaurya.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a> 
          
          </div>
        </article>

        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={job} alt="expedia" />  
        </div>
        <h3>Job App</h3>
        <p>This app contains 3 pages. Very first page is form submission in order get data on the next page.Other two pages contain data in the form of table.This app is designed using HTML,CSS,JS.</p>
        <p>HTML | CSS | JavaScript | Netlify | Local Storage</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/Job-App" className='btn' target='_blank'>GitHub</a>
          <a href="https://starlit-lolly-457694.netlify.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={bmi} alt="expedia" />  
        </div>
        <h3>BMI calculator</h3>
        <p>This calculator is designed usin chakra UI and functionalities has been added by using the concepts of React JS.
</p>
        <p>React js | Redux | Vercel | Local Storage</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/BMI-calculator" className='btn' target='_blank'>GitHub</a>
          <a href="https://bmi-calculator-a1bntdkke-taniyamaurya.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio_item'>
        <div className='portfolio_item-img'>
          <img src={todo} alt="expedia" />  
        </div>
        <h3>Todo App</h3>
        <p>The goal of the project is to create a simple and responsive web-based Todo App that allows users to add, update, and delete tasks. The app will help users keep track of their tasks and prioritize them based on their importance.</p>
        <p>React js | CSS | Vercel | Local Storage | JSON-server</p>
          <div className='portfolio_item-cta'>
          <a href="https://github.com/Taniya635/todo_app" className='btn' target='_blank'>GitHub</a>
          <a href="https://todo-app-six-amber-10.vercel.app/" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        

      </div>


      
    </section>
  )
}


