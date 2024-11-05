import React, { useState } from "react";
import Navbar from "../home/Navbar";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message, id } = data;
      console.log("success", success);
      console.log("data", data);
      if (success) {
        handleSuccess(message);
        window.location.href = `http://localhost:3001/?userid=${id}`; // Redirect to dashboard
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };
  return (
    <>
      <Navbar />
      <div className="container mt-0 p-5">
        <div className="row p-0">
          <div className="col-6 p-5">
            <img src="/media/signup.png" alt="" srcset="" width={450} />
          </div>
          <div className="col-6 mt-0 p-5">
            <h3>Signup now</h3>
            <h5 className="mb-2">Or track your existing application.</h5>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  className="p-1 m-1 w-100"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="email">Username</label>
                <br />
                <input
                  className="p-1 m-1 w-100"
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Enter your username"
                  onChange={handleOnChange}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  className="p-1 m-1 w-100"
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                />
              </div>
              <button
                type="submit"
                style={{ width: "30%", margin: ".5rem" }}
                className="p-2 btn btn-primary text-white fs-5"
              >
                Submit
              </button>
              <br />
              <span>
                Already have an account? <Link to={"/login"}>Login</Link>
              </span>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
