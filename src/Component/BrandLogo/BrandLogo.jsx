import React from 'react';
import Logo from '../../Container/images/housysLogo.png';

const BrandLogo = () => {
    return (
        <a href="/" className="navbar-brand">
            <img src={Logo} alt="HouseSys Logo" />
        </a>
    );
}

export default BrandLogo;
