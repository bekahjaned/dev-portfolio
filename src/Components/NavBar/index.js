import React from 'react';

import { NavBarWrap } from '../../Elements/NavBarWrap/';

function NavBar() {
    return (
        <NavBarWrap>
            <div className="nav-links">
                <a href="#about">About</a>
                <a href="#work">Work</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </NavBarWrap>
    );
};

export default NavBar;
