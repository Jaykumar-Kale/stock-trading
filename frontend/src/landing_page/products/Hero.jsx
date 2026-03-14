import React from 'react'

function Hero() {
  return (
    <div className='container border-bottom mb-5' style={{height:"43vh"}}>
      <div className="row text-center mt-5 fs-4">
      <h1 style={{opacity:"0.85",fontSize:"2.7rem",lineHeight:"2.8rem",marginTop:"3.5rem"}}>Zerodha Products</h1>
      <p className=' opacity-75 mt-2 fs-5'>Sleek, modern, and intuitive trading platforms</p>
      <p className='mt-1 mb-5' style={{fontSize:"1.1rem"}}>Check out our  <a className='opacity-75' href="/">investment offerings <i class="fa-solid fa-arrow-right"></i> </a></p>
      </div>
    </div>
  )
}

export default Hero