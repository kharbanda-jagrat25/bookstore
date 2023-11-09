import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { CONSTANTS } from '../constants/constants';

const Navbar = () => {
    const { HOME, BOOKS, AUTHORS, CART } = CONSTANTS;
    const location = useLocation();

    const getUrl = pageName => '/' + pageName;

    const getClassName = pageName => {
        if (location.pathname === getUrl(pageName)) return "nav-item selected";
        if (location.pathname.includes(BOOKS) && pageName === BOOKS) return "nav-item selected";
        return "nav-item";
    }

    return (
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
    );
};

export default Navbar;
