import React, { useState } from "react";
import "./SignUp.css";
import Card from "../card/Card";
import { AiOutlineGoogle } from "react-icons/ai";
import { database } from "../utils/database";
import { NavLink } from "react-router-dom";

const SignUp = ({ setIsLoggedIn }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});

  const errors = {
    username: "Invalid username",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
  };

  const handleSubmit = (e) => {
    // Prevent page from reloading
    e.preventDefault();

    if (!username) {
      // Username input is empty
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }

    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    // Search for user credentials
    const currentUser = database.find((user) => user.username === username);

    if (currentUser) {
      if (currentUser.password !== password) {
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        // Correct password, log in user
        setErrorMessages({});
        setIsLoggedIn(true);
      }
    } else {
      // Username doens't exist in the database
      setErrorMessages({ name: "username", message: errors.username });
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
      <h1 className="title">
        <span>Sign Up</span> for New Account
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
          <label>Full Name/Business Name</label>
          <input
            type="text"
            placeholder="John Bull"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="text"
            placeholder="You@example.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {renderErrorMsg("username")}
          {renderErrorMsg("noUsername")}
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter 6 characters or more"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {renderErrorMsg("password")}
          {renderErrorMsg("noPassword")}
        </div>
        <div className="check-area">
          <div>
            <input
              type="checkbox"
              // value={check}
              // onChange={(e) => setPassword(e.target.value)}
            />
            <h6>remember me</h6>
          </div>
          <div className="link_container">
            <NavLink to="/forgot-p" className="small">
              Forgot Password?
            </NavLink>
          </div>
        </div>
        <input type="submit" value="Sign Up" className="login_button" />
        <div className="check-area">
          <p className="not-regis">Already Registered?</p>
          <div className="link_container">
            <NavLink to="/login" className="small">
              Log In
            </NavLink>
          </div>
        </div>
      </form>

      <div className="icons">
        <NavLink to="/sign-up" className="">
          {/* <AiOutlineGoogle className="icon" /> */}
          OR
        </NavLink>
      </div>
    </Card>
  );
};

export default SignUp;
