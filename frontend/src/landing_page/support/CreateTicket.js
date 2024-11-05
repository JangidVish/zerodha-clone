import React from 'react'

const CreateTicket = () => {
  return (
    <div className="container p-2 mt-5">
        <h4>To create a ticket, select a relevant topic</h4>
        <div className="row p-5 gap-6">
            <div className="col-4">
                <h4><i class="fa-solid fa-plus" style={{borderRadius:"50%", marginRight:"5px", border:"2px solid black", alignItems:"center", fontSize:"20px"}}></i>Account Opening</h4>
                <ul className='list-unstyled text-primary m-2'>
                    <li>Getting started</li>
                    <li>Online</li>
                    <li>Offline</li>
                    <li>Charges</li>
                    <li>Company, Partnership and HUF</li>
                    <li>Non Resident Indian (NRI)</li>
                </ul>
            </div>
            <div className="col-4">
            <h4><i class="fa-solid fa-user" style={{ marginRight:"5px", alignItems:"center", fontSize:"22px"}}></i>Your Zerodha Account</h4>
                <ul className='list-unstyled text-primary m-2'>
                    <li>Login credentials</li>
                    <li>Your Profile</li>
                    <li>Account modification and segment addition</li>
                    <li>CMR & DP ID</li>
                    <li>Nomination</li>
                    <li>Transfer and conversion of shares</li>
                </ul>
            </div>
            <div className="col-4">
            <h4><i class="fa-solid fa-chart-simple" style={{ marginRight:"5px", alignItems:"center", fontSize:"22px"}}></i>Your Trading and Markets</h4>
                <ul className='list-unstyled text-primary m-2'>
                    <li>Trading FAQs</li>
                    <li>Kite</li>
                    <li>Margins</li>
                    <li>Product and order types</li>
                    <li>Corporate actions
                    </li>
                    <li>Kite features</li>
                </ul>
            </div>

            <div className="col-4">
                <h4><i class="fa-regular fa-credit-card" style={{ marginRight:"5px",  alignItems:"center", fontSize:"20px"}}></i>Funds</h4>
                <ul className='list-unstyled text-primary m-2'>
                    <li>Fund withdrawal</li>
                    <li>Adding funds</li>
                    <li>Adding bank accounts</li>
                    <li>eMandates</li>
                </ul>
            </div>
            <div className="col-4">
            <h4><i class="fa-regular fa-copyright" style={{ marginRight:"5px", alignItems:"center", fontSize:"22px"}}></i>Console</h4>
                <ul className='list-unstyled text-primary m-2'>
                    <li>IPO</li>
                    <li>Portfolio</li>
                    <li>Funds statement</li>
                    <li>Profile</li>
                    <li>Reports</li>
                    <li>Referral program</li>
                </ul>
            </div>
            <div className="col-4">
            <h4><i class="fa-solid fa-money-bill" style={{ marginRight:"5px", alignItems:"center", fontSize:"22px"}}></i>Coin</h4>
                <ul className='list-unstyled text-primary m-2'>
                    <li>Understanding mutual funds and Coin</li>
                    <li>Coin app</li>
                    <li>Coin web</li>
                    <li>Transactions and reports</li>
                    <li>National Pension Scheme (NPS)
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default CreateTicket