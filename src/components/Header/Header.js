import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <h1>Goodies <span className="ice-cream">Ice Cream</span> Parlour</h1>
            <h3>You Make Me Melt</h3>
            <h2>Total Budget: 500 Million</h2>
        </div>
    );
};

export default Header;