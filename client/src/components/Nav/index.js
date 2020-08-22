import React from 'react'
import { Link } from 'react-router-dom'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navigation() {

    return (
            <Nav className="mr-auto">
                <Navbar.Brand>
                <p className='navcolor'>
                <img src="https://img.icons8.com/cotton/64/000000/volunteering.png" alt='help-exchange' />
                    Help Exchange
                </p>
                </Navbar.Brand>
                <Link className='nav-link' to="/about">
                    <p className='navcolor'>


                    <img src="https://img.icons8.com/ios-filled/50/000000/info.png"/>

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
                    <img src="https://img.icons8.com/ios-filled/50/000000/login-rounded-right.png" alt='login'/>
                        Login
                    </p>
                </Link>
                <Link className='nav-link' to="/Volunteer">
                    <p className='navcolor'>
                    <img src="https://img.icons8.com/cotton/64/000000/volunteering.png" alt='volunteer'/>
                        Volunteer
                    </p>
                </Link>
                <Link className='nav-link' to="/RequestHelp">
                    <p className='navcolor'>
                    <img src="https://img.icons8.com/ios-filled/50/000000/connectivity-and-help.png" alt='request-help'/>
                        Request Help 
                    </p>
                </Link>
                <Link className='nav-link' to="/Donations">
                    <p className='navcolor'>
                    <img src="https://img.icons8.com/ios-filled/50/000000/charity.png" alt='donations'/>
                        Donations
                    </p>
                </Link>
            </Nav>


    )
}



export default Navigation;

