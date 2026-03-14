import React from 'react'

function Hero() {
  return (
    <div className='container mt-5'>
      <div className="row text-center">
        <h1 style={{opacity:"0.85",fontSize:"2.7rem",lineHeight:"2.8rem",marginTop:"3.5rem"}}>Charges</h1>
        <h3 className='opacity-50 fs-5 mb-5 mt-3'>List of all charges and taxes</h3>
      </div>
      <div className="row mt-5 Pricing">
       
       <div className="col">
        <img src="media/images/pricing0.svg" alt="" />
        <h3>Free equity delivery</h3>
        <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
       </div>
       <div className="col">
        <img src="media/images/other-trades.svg" alt="" />
        <h3>Intraday and F&O trades</h3>
        <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
       </div>
       <div className="col">
        <img src="media/images/pricing0.svg" alt="" />
        <h3>Free direct MF</h3>
        <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.

</p>
       </div>
       
      </div>
    </div>
  )
}

export default Hero