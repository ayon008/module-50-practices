import React from 'react';
import logo from '../images/Logo.svg'
import Css from './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="">Order</a>
                <a href="">Order Review</a>
                <a href="">Manage Inventory</a>
                <a href="">Login</a>
            </nav>
        </div>
    );
};

export default Header;