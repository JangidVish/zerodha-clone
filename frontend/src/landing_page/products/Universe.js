import React from 'react'

const Universe = () => {
  return (
    <div className="container text-center mt-5 mb-5">
        <h4>Want to know more about our technology stack? Check out the Zerodha.tech blog.</h4>
    <div className="container mt-5 p-5">
    <h1 className='mb-4'>The Zerodha Universe</h1>
    <h5 className='mt-4'>Extend your trading and investment experience even further with our partner platforms</h5>
          <div className="row mt-5">
            <div className="col-4">
                <img src="media/zerodhaFundhouse.png" alt="" srcset="" width={200} />

                <p className='mt-4'>Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.</p>
            </div>
            <div className="col-4">
            <img src="media/sensibullLogo.svg" alt="" srcset="" width={200} />
<p className='mt-4'>Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.

</p>
            </div>
            <div className="col-4">
            <img src="media/tijori.svg" alt="" srcset="" width={150} />

<p className='mt-4'>Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
</p>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-4">
            <img src="media/streakLogo.png" alt="" srcset="" width={200} />

<p className='mt-4'>
Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
            </div>
            <div className="col-4">
            <img src="media/smallcaseLogo.png" alt="" srcset="" width={200} />

<p className='mt-4'>Thematic investing platform that helps you invest in diversified
baskets of stocks on ETFs.</p>
            </div>
            <div className="col-4">
            <img src="media/dittoLogo.png" alt="" srcset="" width={175} />

<p className='mt-4'>Personalized advice on life
and health insurance. No spam
and no mis-selling.
Sign up for free</p>
            </div>

        </div>
        </div>

        <button style={{width:"20%", margin:"0 auto"}} className='p-3 btn btn-primary text-white fs-5'>
        Sign up for free
       </button>
  
    </div>
  )
}

export default Universe