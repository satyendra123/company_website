import React from 'react';
import NavBarItem from '../NavBarItem/NavBarItem';
// import Searchbutton from '../../../SearchButton/Searchbutton';
import ContactUs from '../../ContactUs/ContactUs';
import BrandLogo from '../../../BrandLogo/BrandLogo';

const NavBarMain = () => {
    return (
        <div class="container-fluid bg-light p-2">
            <div class="container px-0">
                <nav class="navbar navbar-light navbar-expand-xl">
                    <BrandLogo />
                    <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars text-primary"></span>
                    </button>
                    <div class="collapse navbar-collapse bg-light py-3" id="navbarCollapse">
                        <NavBarItem />
                        <div class="d-flex align-items-center flex-nowrap pt-xl-0">
                            {/* <Searchbutton /> */}
                            <ContactUs />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBarMain
