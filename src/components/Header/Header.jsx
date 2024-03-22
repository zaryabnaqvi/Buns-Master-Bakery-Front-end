import React from "react";
import Navbar from "./Navbar";
import { Link, NavLink } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";
import styled from "styled-components";
import { BsHandbagFill } from "react-icons/bs";
import { useState } from "react";
import Cart from "../Cart/Cart";
// import Navbar2 from "./Navbar2";
import '../../styles/Navbar.css'
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LOGO from '/images/PHOTO-2024-02-13-21-32-21.jpg'
import {connect} from "react-redux"
import Home from "../Home/Home";

const Header = ({cart}) => {
  const [showCart, setShowCart] = useState(false);
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
    <MainHeader>
      <div className="header-content">
        <NavLink to="/">
          <div style={{color:"yellow",fontSize:"2.5rem",display:"flex",alignItems:"center"}} className="">
            <img src={LOGO} style={{
              width:"auto",
              height:"5rem",
              borderRadius:"50% 50% 50% 50% / 50% 50% 50% 50% "
            }}/>  <span style={{ fontSize:"2rem",marginLeft:"0.3rem" ,letterSpacing:2,fontWeight:"700"}}> <i > <span style={{color:"white"}}>BUNS</span>
              MASTER</i></span>
          </div>
        </NavLink>
        <Navbar />
      
        <div style={{display:"flex",flexDirection:"row-reverse"}}>
        <div className="mobile-nav" style={{marginLeft:"1.5rem"}}>
        <FontAwesomeIcon
        style={{color:"whitesmoke"}}
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>

      <div >
        <span className="cart-icon" onClick={() => setShowCart(true)}>
          <BsHandbagFill className="bag" />
          <span>{cart.items.length}</span>
        </span>
        </div>
        </div>
       
        {showCart && <Cart setShowCart={setShowCart} />}
      </div>
      {/* <Navbar2/> */}
  
    </MainHeader>
     <div style={{zIndex:"999"}} className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div  className="mobile-navbar-close">
        <FontAwesomeIcon onClick={openNav} icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav}  to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={openNav}  to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={openNav}  to="/pizza-menu">
              Pizza
            </Link>
          </li>
          <li>
            <Link onClick={openNav}  to="/restaurant-menu">
              Restaurant
            </Link>
          </li>
          <li>
            <Link onClick={openNav}  to="/bakery-menu">
              Bakery
            </Link>
          </li>
          <li>
            <Link onClick={openNav}  to="/contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link onClick={openNav}  to="/account">
              Account
            </Link>
          </li>
        </ul>
      </div> 
    </>
  );
};

const MainHeader = styled.header`
  width: 100%;
  position: sticky;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  top: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.bg};

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 120rem;
    margin: 0 auto;
    height: 6rem;
    padding: 0 2.5rem;
  }
  a {
    text-decoration: none;
    .logo {
      display: flex;
      gap: 0.6rem;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.white};
      text-decoration: none;
      font-weight: 600;
      .logo-icon {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  }
  .bag {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2.5rem;
    cursor: pointer;
  }
  .cart-icon {
    position: relative;
    display: flex;
    span {
      min-width: 20px;
      text-align: center;
      background-color: ${({ theme }) => theme.colors.helper};
      padding: 2.5px;
      position: absolute;
      top: -5px;
      right: -12px;
      font-size: 12px;
      line-height: 1;
      border-radius: 10px;
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .header-content {
      height: 8rem;
    }
  }
`;


const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  null
)(Header);
