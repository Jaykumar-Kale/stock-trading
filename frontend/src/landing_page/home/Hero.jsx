import React from 'react'
import {useNavigate} from "react-router-dom"

function Hero() {
  const navigate = useNavigate();
  return (
    <div className='container p-5 text-center mb-5' >
       <div className="row">
        <img className='mb-5' style={{height:"45vh",width:"50vw",margin:"0 auto"}} src="media/images/homeHero.png" alt="HeroImage" />
        <h1 className='mt-5 ' style={{fontSize:"3rem",opacity:"0.85"}} >
           Invest in everything
        </h1>
        <p className='fs-5 opacity-85'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button onClick={() => {navigate("/signup")}} className='opacity-75 p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>
       </div>
       
    </div>
  )
}

export default Hero
