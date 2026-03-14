import React from 'react'

function Awards() {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
            <h1>Largest stock broker in India</h1>
            <p className='mb-5'>2+ million Zerodha clients contibute to over 15% of all retial order volumes in India daily by trading and investing in:</p>
            <ul>
              <div className="row">
                <div className="col-6">
                <li>
                <p>Features and options</p>
              </li>
              <li>
                <p>Commodity and derivatives</p>
              </li>
              <li>
                <p>Currency derivatives</p>
              </li>
              
                </div>
                <div className="col-6">
                <li>
                <p>Stock & IPOs</p>
              </li>
              <li>
                <p> Direct mutual funds </p>
              </li>
              <li>
                <p>Bonds and</p>
              </li>
                </div>
              </div>
            </ul>

            <img style={{width:"90%"}} src="media/images/pressLogos.png" alt="" />

        </div>
      </div>
    </div>
  )
}

export default Awards