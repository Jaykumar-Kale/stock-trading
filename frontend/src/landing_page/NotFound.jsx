import React from 'react'

function NotFound() {
  return (
    <div className='container p-5 text-center mb-5' >
       <div className="row">
        <h1 className='mt-3 ' style={{fontSize:"2.5rem",opacity:"0.85"}} >
        404 Not Found
        </h1>
        <p className=' opacity-75 mt-4 mb-4'>
            Sorry the page you are looking for does not exist
        </p>
        {/* <button className='opacity-75 p-2 mt-3 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button> */}
       </div>
       
    </div>
  )
}

export default NotFound