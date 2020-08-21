import React from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';

function Navigation() {

    return (
    
            <Nav className="mr-auto">
                <Link className='nav-link' to="/about">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/clouds/100/000000/about.png" alt='about' />
                        About Us
                    </p>
                </Link>
                {/* <Link className='nav-link' to="/contact">
                    <p className='navcolor'>
                        <img src="https://img.icons8.com/dusk/64/000000/moleskine.png" alt='portfolio'/>
                        Contact
                    </p>
                </Link> */}
                <Link className='nav-link' to="/LoginForm">
                    <p className='navcolor'>
                    <img src="https://img.icons8.com/ios-filled/50/000000/login-rounded-right.png"/>
                        Login
                    </p>
                </Link>
                <Link className='nav-link' to="/Volunteer">
                    <p className='navcolor'>
                    <img src="https://img.icons8.com/cotton/64/000000/volunteering.png"/>
                        Volunteer
                    </p>
                </Link>
                <Link className='nav-link' to="/RequestHelp">
                    <p className='navcolor'>
                    <img src="https://img.icons8.com/ios-filled/50/000000/connectivity-and-help.png"/>
                        Request Help 
                    </p>
                </Link>
                <Link className='nav-link' to="/Donations">
                    <p className='navcolor'>
                    <img src="https://img.icons8.com/ios-filled/50/000000/charity.png"/>
                        Donations
                    </p>
                </Link>
            </Nav>


    )
}

export default Navigation;
