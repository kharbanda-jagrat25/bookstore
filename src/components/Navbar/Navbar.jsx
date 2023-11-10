import React from "react";
import { Link, useLocation } from "react-router-dom";
import PersonSvg from "../../assets/icons/person.svg";
import { CONSTANTS } from "../../constants/constants";

import "./navbar.scss";

const Navbar = () => {
  const { HOME, BOOKS, AUTHORS, CART } = CONSTANTS;
  const location = useLocation();

  const getUrl = (pageName) => "/" + pageName;

  const getClassName = (pageName) => {
    if (location.pathname === getUrl(pageName)) return "nav-item selected";
    if (location.pathname.includes(BOOKS) && pageName === BOOKS)
      return "nav-item selected";
    return "nav-item";
  };

  return (
    <>
      <div className="navbar-container">
        <div className="heading-container">
          <div>
            <h4 className="heading">BOOKSTORE</h4>
          </div>
          <div className="action-button-container">
            <img src={PersonSvg} alt="person" />
          </div>
        </div>
      </div>

      <nav className="navbar">
        <ul className="nav-list">
          <li className={getClassName(HOME)}>
            <Link to={getUrl(HOME)}>Home</Link>
          </li>
          <li className={getClassName(BOOKS)}>
            <Link to={getUrl(BOOKS)}>Books</Link>
          </li>
          <li className={getClassName(AUTHORS)}>
            <Link to={getUrl(AUTHORS)}>Authors</Link>
          </li>
          <li className={getClassName(CART)}>
            <Link to={getUrl(CART)}>Shopping Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
