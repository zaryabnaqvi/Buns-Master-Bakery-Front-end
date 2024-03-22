import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <>
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/restaurant-menu">
              Restaurant
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/bakery-menu">
              Bakery
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/pizza-menu">
              Frozen Pizza
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/account">
              Account
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
    </>
  );
};

const Nav = styled.nav`
  .navbar-list {
    list-style: none;
    display: none;
    gap: 4.2rem;
    .navbar-link {
      font-size: 1.7rem;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
        transition: all 0.3s linear;
      }
    }
  }
  @media only screen and (min-width: ${({ theme }) => theme.media.tab}) {
    .navbar-list {
      display: flex;
    }
  }
`;

export default Navbar;
