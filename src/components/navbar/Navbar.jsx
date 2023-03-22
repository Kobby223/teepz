// import "./Navbar.css";
// import { BsGift } from "react-icons/bs";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { NavLink } from "react-router-dom";
// import useWindowSize from "../utils/useWindowSize";

// function Navbar() {
//   const { width } = useWindowSize();
//   let teepzLogo = require("./logo/teepzLogo.png");
//   return (
//     <div>
//       {width > 500 && (
//         <div className="header">
//           <div className="logo">
//             <img src={teepzLogo} alt="" />
//           </div>
//           <div className="right">
//             <ul className="lists">
//               <li className="list">
//                 <NavLink exact to="/pricepage">
//                   <BsGift />
//                 </NavLink>
//               </li>
//               <li className="list">
//                 <NavLink exact to="/">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="list">
//                 <NavLink exact to="/login">
//                   Login
//                 </NavLink>
//               </li>
//               <li className="list">
//                 <button className="active">
//                   <NavLink exact to="/sign-up">
//                     Sign Up
//                   </NavLink>
//                 </button>
//               </li>
//               <li className="list">
//                 <RxHamburgerMenu />
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//       {/* <div>
//         <span
//           className="primary-button"
//           // onClick={onPriceClick}
//           role="button"
//         >
//           Join Now
//         </span>
//       </div> */}
//     </div>
//   );
// }
// export default Navbar;
import { BsGift } from "react-icons/bs";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  let teepzLogo = require("./logo/teepzLogo.png");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        <img src={teepzLogo} alt="" />
      </NavLink>
      <div onClick={handleClick} className="nav-icon">
        {open ? <FiX /> : <FiMenu />}
      </div>
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li className="nav-item">
          <NavLink to="/reward" className="nav-link" onClick={closeMenu}>
            <BsGift />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link" onClick={closeMenu}>
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <button className="active">
            <NavLink to="/sign-up" className="nav-link" onClick={closeMenu}>
              Sign Up
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
