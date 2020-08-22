import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Navigation from '../Nav/index'
import Navbar from 'react-bootstrap/Navbar';
import About from '../About/index'
// import Contact from '../Contact/index'
import LoginForm from '../LoginForm/index'
import Donations from '../Donations/index'
import Volunteer from '../LoginForm/index'
import RequestHelp from '../Donations/index'

function Header() {

    return (
        <HashRouter>
            <Navbar className='header'>
                    <Navbar.Brand>
                        <p className='navcolor'>
                        <img src="https://img.icons8.com/cotton/64/000000/volunteering.png"/>
                            Help Exchange
                        </p>
                    </Navbar.Brand>
                <Navigation />
            </Navbar>

            <div className='container' style={{ marginBottom:'150px' }}>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
                    {/* <Route path='/contact' component={Contact} /> */}
                    <Route path="/about" component={About}/>
                    <Route path='/LoginForm' component={LoginForm} />
                    <Route path='/LoginForm' component={Volunteer} />
                    <Route path='/RequestHelp' component={RequestHelp} />
                    <Route path='/Donations' component={Donations} />
                </Switch>
            </div>
        </HashRouter>

    )
}

export default Header;