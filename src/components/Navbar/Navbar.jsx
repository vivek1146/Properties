import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();
  const gotoHome = ()=>{
    navigate('/');
  }
  return (
    <>
      <nav className={navHeight ? "show nav" : "nav"}>
        <div className='logo' onClick={() => gotoHome()}>
           RENTALS
        </div>

        <ul>
          <li>
            <Link to={"/bookingform"}>BOOK</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>ABOUT US</Link>
          </li>
          <li>
            <Link to={"/villas"}>VILLAS</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li>
            <Link to={"/login"}>LOGIN</Link>
          </li>
          <li>
            <Link to={"/signup"}>SIGNUP</Link>
          </li>
        </ul>

        <RxHamburgerMenu
          className='hamburger'
          onClick={() => setNavHeight(!navHeight)}
        />
      </nav>
    </>
  );
};

export default Navbar;
