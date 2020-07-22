import React from 'react';
import {Link} from 'react-router-dom'

function Nav() {

    return (
        <nav>
            <ul className='nav-links'>
                <Link to='/benefits'>
                    <li>Benefits</li>
                </Link>

                <Link to='/projects'>
                    <li>Projects</li>
                </Link>

                <Link to='/reservations'>
                    <li>Reservations</li>
                </Link>

                <Link to='/contactus'>
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
    );

}

export default Nav;