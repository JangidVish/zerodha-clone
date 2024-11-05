import React from 'react'

const Pricing = () => {
  return (
    <div className="container mt-5">
      <div className="row">

        <div className="col-5">
          <h1>Unbeatable pricing</h1>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        </div>
        <div className="col-7">
          <div className="row">
            <div className="col-4"  style={{fontSize:"12px"}}>
              <div className="row">
                <div className="col-6">
                <img src="media/pricingEquity.svg" alt="" srcset="" width={125} />
                </div>
                <div className="col-6">
                <br /><br /><p> Free account
                opening</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
              <div className="col-6" >
                <img src="media/pricingEquity.svg" alt="" srcset="" width={125} />
                </div>
                <div className="col-6" style={{fontSize:"12px"}}>
                <br /><br /><p>  Free equity delivery
                and direct mutual funds</p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
              <div className="col-6" >
                <img src="media/other-trades.svg" alt="" srcset="" width={125} />
                </div>
                <div className="col-6" style={{fontSize:"12px"}}>
                <br /> <br /><p>   Intraday and
                F&O</p>
                </div>
              </div>
            </div>.
          </div>
       
        </div>
      </div>
    </div>
  )
}

export default Pricing