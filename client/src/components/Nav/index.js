import React from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import Auth from '../../utils/auth';

function Navigation() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

    return (
        <Navbar className="mr-auto">
            <Navbar.Brand href="/">
                <img 
                    src="https://img.icons8.com/cotton/64/000000/volunteering.png" 
                    alt='help-exchange'
                    className="justify-space-between"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
                <Nav.Link className='nav-link' to="/about">
                    <img 
                        src="https://img.icons8.com/ios-filled/50/000000/info.png"
                        alt='about'
                        width='50'
                        height='50'
                        />
                        About Us
                </Nav.Link>
                <Nav.Link className='nav-link' href="/Volunteer">
                    <img src="https://img.icons8.com/cotton/64/000000/volunteering.png"
                    alt='volunteer'
                    width='50'
                    height='50'/>
                        Volunteer
                </Nav.Link>
                <Nav.Link className='nav-link' href="/Request">
                    <img src="https://img.icons8.com/ios-filled/50/000000/connectivity-and-help.png"
                    alt='request-help'
                    width='50'
                    height='50'
                    />
                        Request Help 
                </Nav.Link>
                <Nav.Link className='nav-link' href="/Donations">
                    <img src="https://img.icons8.com/ios-filled/50/000000/charity.png"
                    alt='donations'
                    width='50'
                    height='50'
                    />
                        Donations
                </Nav.Link>
                <NavDropdown title="Login" id="login" className="align-self-center">
                        {Auth.loggedIn() ? (
                                <>
                                <NavDropdown.Item href="/profile">Me</NavDropdown.Item>
                                <NavDropdown.Item href="/" onClick={logout}>
                                    Logout
                                </NavDropdown.Item>
                                </>
                            ) : (
                                <>
                                <NavDropdown.Item href="/login">
                                        {/* <img src="https://img.icons8.com/ios-filled/50/000000/login-rounded-right.png"
                                        alt='login'
                                        width='50'
                                        height='50'/> */}
                                            Login
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/signup">
                                        {/* <img src="https://img.icons8.com/ios-filled/50/000000/login-rounded-right.png"
                                        alt='login'
                                        width='50'
                                        height='50'
                                        /> */}
                                            Sign Up
                                </NavDropdown.Item>
                                </>
                            )}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}



export default Navigation;

