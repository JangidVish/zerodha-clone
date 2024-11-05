import React from 'react'

const Team = () => {
  return (
    <div className="container mt-5  mb-5 p-5">
        <h1 className='text-center'>People</h1>
        <div className="row mt-5">
            <div className="col-6 ">
                <img src="media/nithinKamath.jpg" alt="" srcset="" width={400} style={{borderRadius:"50%"}}/>
            </div>
            <div className="col-6 mt-5 fs-6 text-black">
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
<br /><br />
He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
<br /><br />
Playing basketball is his zen.
<br /><br />
Connect on Homepage / TradingQnA / Twitter
            </div>
        </div>
    </div>
  )
}

export default Team