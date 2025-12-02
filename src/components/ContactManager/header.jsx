import React from 'react';
import '../ContactManager/Contact.css';

const Header = () => {
    return (
        
        <header>
            <div className="logo">Contact Manager</div>
            <nav id="navMenu">
                {/* <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Services</a> */}
                <a href="#">Contact List</a>
            </nav>
            <div className="menu-toggle" id="menuToggle"></div>
        </header>
       
    );
}
export default Header;
