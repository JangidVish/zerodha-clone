import React from 'react'

const Stats = () => {
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-6">
          <h1 className='mb-4'>Trust with confidence</h1>
          <h4>Customer-first always</h4>
          <p className='mb-4'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

          <h4>No spam or gimmicks</h4>
          <p className='mb-4'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

          <h4>The Zerodha universe</h4>
          <p className='mb-4'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

          <h4>Do better with money</h4>
          <p className='mb-4'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-6">
          <img src="media/ecosystem.png" alt="" srcset="" width={550} />
          <div className="row text-center text-primary">
          <div className="col-6">
            Explore our products   <i class="fa-solid fa-arrow-right p-2" ></i>
          </div>
          <div className="col-6"> Try Kite demo <i class="fa-solid fa-arrow-right p-2" ></i></div>
        </div>
        </div>
        <img src="media/pressLogos.png" alt="" srcset="" className='mt-4' style= {{width:"60%", margin:"0 auto"}} />
      </div>
    </div>
  )
}

export default Stats