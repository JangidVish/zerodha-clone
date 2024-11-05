import React from "react";

const Brookerage = () => {
  return (
    <div className="container mt-5 p-5 border-top">
      <div className="row">
        <div className="col-6">
          <h5 className="text-center text-primary">Brokerage Calculator</h5>
        </div>
        <div className="col-6">
          <h5 className="text-center text-primary">List of Charges</h5>
        </div>
      </div>
      <ul className="text-muted mt-5" style={{ lineHeight: "35px" }}>
        <li>
          Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST
          per order
        </li>
        <li>Digital contract notes will be sent via e-mail</li>
        <li>
          Physical copies of contract notes, if required, shall be charged ₹20
          per contract note. Courier charges apply
        </li>
        <li>
          For NRI account (non-PIS), 0.5% of ₹100 per executed order for equity
          (whichever is lower)
        </li>
        <li>
          {" "}
          For NRI account (PIS), 0.5% of ₹200 per executed order for equity
          (whichever is lower)
        </li>
        <li>
          If the account is debit balance, any order placed will be charged ₹40
          per executed order instead of $20 per executed order
        </li>
      </ul>
    </div>
  );
};

export default Brookerage;
