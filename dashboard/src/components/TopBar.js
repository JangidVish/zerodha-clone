import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Menu from "./Menu";

const TopBar = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userId = queryParams.get("userid");
  const [username, setUsername] = useState("");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.post(
          "http://localhost:5000/userData",
          { uid: userId }, // Wrap userId in an object
          { withCredentials: true }
        );
        setUsername(data.user);
        console.log(username);
      } catch (error) {
        console.log("An error occurred during login. Please try again.");
        console.error("Login error:", error);
      }
    };
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const logout = () => {
    window.location.href = `http://localhost:3000`;
  };

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>
      <Menu username={username} uid={userId} />
      <button onClick={logout}>Logout</button>
      <ToastContainer />
    </div>
  );
};

export default TopBar;
