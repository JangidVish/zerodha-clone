import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container mt-5 p-5 text-center">
        <h1 className="fs-1">Charges</h1>
        <p className="mb-5 fs-4 text-muted mt-4">
          List of all charges and taxes
        </p>
        <div className="row text-center mt-5">
          <div className="col-4 ">
            <img src="media/pricingEquity.svg" alt="" srcset="" width={300} />
            <h1 className="fs-2">Free equity delivery</h1>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4">
            <img src="media/other-trades.svg" alt="" srcset="" width={300} />
            <h1 className="fs-2">Intraday and F&O trades</h1>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4">
            <img src="media/pricingEquity.svg" alt="" srcset="" width={300} />
            <h1 className="fs-2">Free direct MF</h1>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
