import React from 'react'

const Education = () => {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" alt="" srcset="" />
        </div>
        <div className="col-6 mt-5">
          <h2>Free and open market education</h2>
          <p className='fs-6 pt-4' style={{lineHeight:"2"}}>
          Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          <br />
          <span className='mt-4 text-primary fs-5'>Varsity <i class="fa-solid fa-arrow-right p-2" ></i></span>
          <br />
          TradingQ&A, the most active trading and investment community in India for all your market related queries.
          <br />
          <span className='mt-4 text-primary fs-5'>TradingQ&A <i class="fa-solid fa-arrow-right p-2" ></i></span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Education