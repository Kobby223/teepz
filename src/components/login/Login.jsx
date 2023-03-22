// import styled from "styled-components";
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
// import { Input } from "../input/Input";
// import { Button } from "../input/Button";
// import { Icon } from "../input/Icon";
// import { Text } from "../input/Text";

// function Login() {
//   const FacebookBackground =
//     "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
//   const InstagramBackground =
//     "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
//   const TwitterBackground =
//     "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
//   return (
//     <MainContainer>
//       <WelcomeText>Welcome</WelcomeText>
//       <InputContainer>
//         <Input type="text" placeholder="Email" />
//         <Input type="password" placeholder="Password" />
//       </InputContainer>
//       <RememberMe>
//         <Text />
//       </RememberMe>
//       <ButtonContainer>
//         <Button content="login" />
//       </ButtonContainer>
//       <LoginWith>OR LOGIN WITH</LoginWith>
//       <HorizontalRule />
//       <IconContainer>
//         <Icon color={FacebookBackground}>
//           <FaFacebookF />
//         </Icon>
//         <Icon color={InstagramBackground}>
//           <FaInstagram />
//         </Icon>
//         <Icon color={TwitterBackground}>
//           <FaTwitter />
//         </Icon>
//       </IconContainer>
//       <ForgotPassword>Forgot Password ?</ForgotPassword>
//     </MainContainer>
//   );
// }
// const MainContainer = styled.div`
//   display: flex;
//   align-items: center;
//   flex-direction: column;
//   height: 80vh;
//   width: 30vw;
//   background: rgba(255, 255, 255, 0.15);
//   box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
//   backdrop-filter: blur(8.5px);
//   -webkit-backdrop-filter: blur(8.5px);
//   border-radius: 10px;
//   color: #ffffff;
//   text-transform: uppercase;
//   letter-spacing: 0.4rem;
//   // @media only screen and (max-width: 320px) {
//   //   width: 80vw;
//   //   height: 90vh;
//   //   hr {
//   //     margin-bottom: 0.3rem;
//   //   }
//   //   h4 {
//   //     font-size: small;
//   //   }
//   // }
//   // @media only screen and (min-width: 360px) {
//   //   width: 80vw;
//   //   height: 90vh;
//   //   h4 {
//   //     font-size: small;
//   //   }
//   // }
//   // @media only screen and (min-width: 411px) {
//   //   width: 80vw;
//   //   height: 90vh;
//   // }
//   // @media only screen and (min-width: 768px) {
//   //   width: 80vw;
//   //   height: 80vh;
//   // }
//   // @media only screen and (min-width: 1024px) {
//   //   width: 70vw;
//   //   height: 50vh;
//   // }
//   // @media only screen and (min-width: 1280px) {
//   //   width: 30vw;
//   //   height: 80vh;
//   // }
// `;

// const WelcomeText = styled.h2`
//   margin: 3rem 0 2rem 0;
// `;

// const InputContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   align-items: center;
//   height: 20%;
//   width: 100%;
// `;

// const ButtonContainer = styled.div`
//   margin: 1rem 0 0.5rem 0;
//   width: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const LoginWith = styled.h5`
//   cursor: pointer;
// `;

// const HorizontalRule = styled.hr`
//   width: 90%;
//   height: 0.3rem;
//   border-radius: 0.8rem;
//   border: none;
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   background-color: #ebd0d0;
//   // margin: 1.5rem 0 1rem 0;
//   backdrop-filter: blur(25px);
// `;

// const IconContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   margin: 2rem 0 3rem 0;
//   width: 80%;
//   transition: all 0.5s ease;
//   &:hover {
//     padding-left: 10px;
//   }
// `;

// const ForgotPassword = styled.h4`
//   cursor: pointer;
// `;
// const RememberMe = styled.div`
//   display: flex;
//   text-align: start;
//   height: 20px;
//   width: 100%;
//   padding: 0px 50px;
//   margin: -10px 0 10px 0;
// `;
// export default Login;

import React, { useState } from "react";
import "./Login.css";
import Card from "../card/Card";
import { AiOutlineGoogle } from "react-icons/ai";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
import { database } from "../utils/database";
import { NavLink } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
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
      <h1 className="title">Welcome Back!</h1>
      <p className="subtitle">Sign In Here</p>
      <form onSubmit={handleSubmit}>
        <div className="inputs_container">
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
        <input type="submit" value="Log In" className="login_button" />
        <div className="check-area">
          <p className="not-regis">Not Registered?</p>
          <div className="link_container">
            <NavLink to="/sign-up" className="small">
              Create An Account
            </NavLink>
          </div>
        </div>
      </form>

      <div className="icons">
        <NavLink to="/sign-up" className="">
          <AiOutlineGoogle className="icon" />
        </NavLink>
      </div>
    </Card>
  );
};

export default Login;
