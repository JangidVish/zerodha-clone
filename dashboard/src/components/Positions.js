import React, { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {
  const [allPosition, setAllPosition] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/allPosition").then((res) => {
      console.log(res.data);
      setAllPosition(res.data);
    });

    return () => {};
  }, []);

  return (
    <>
      <h3 className="title">Positions ({allPosition.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPosition.map((position, index) => {
            const curValue = position.price * position.qty;
            const isProfit = curValue - position.avg * position.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = position.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{position.product}</td>
                <td>{position.name}</td>
                <td>{position.qty}</td>
                <td>{position.avg.toFixed(2)}</td>
                <td>{position.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - position.avg * position.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{position.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
