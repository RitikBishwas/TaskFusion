import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";
import HeadingComp from "./HeadingComp";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${window.location.origin}/api/v1/register`,
        inputs
      );
      if (response.data.message === "User Already Exists") {
        alert(response.data.message);
      } else {
        alert(response.data.message);
        setInputs({
          email: "",
          username: "",
          password: "",
        });
        navigate("/signin");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred during registration. Please try again later.");
    }
  };

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column w-100 p-3">
              <input
                className="p-2 my-3 input-signup"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                onChange={handleChange}
                value={inputs.email}
              />
              <input
                className="p-2 my-3 input-signup"
                type="text"
                name="username"
                placeholder="Enter Your Username"
                onChange={handleChange}
                value={inputs.username}
              />
              <input
                className="p-2 my-3 input-signup"
                type="password"
                name="password"
                placeholder="Enter Your Password"
                onChange={handleChange}
                value={inputs.password}
              />
              <button className="btn-signup p-2" onClick={handleSubmit}>
                Sign Up
              </button>
            </div>
          </div>
          <div className="col-lg-4 column col-left d-lg-flex justify-content-center align-items-center d-none">
            <HeadingComp first="Sign" second="Up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
