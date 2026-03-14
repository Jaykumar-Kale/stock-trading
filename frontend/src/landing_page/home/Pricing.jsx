import React from 'react'

function Pricing() {
  return (
    <div className='container px-5'>
      <div className="row">
        <div className="col-4">
          <h1 className='mb-3 opacity-75'>Unbeatable pricing</h1>
          <p className='text-muted mb-4 mt-5 mx-2'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="/" className='mx-2'>See pricing  <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6 ">
          <div className="row p-3 text-center">
            <div className="col border p-2">
              <h1 className='mb-4 mt-4'> <i class="fa-solid fa-indian-rupee-sign"></i> 0</h1>
              <p className='mb-2 text-muted'>Free equity delivery and <br /> direct mutual funds</p>
            </div>
            
            <div className="col border">
              <h1 className='mb-4 mt-4'> <i class="fa-solid fa-indian-rupee-sign"></i> 20</h1>
              <p className='text-muted'>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing