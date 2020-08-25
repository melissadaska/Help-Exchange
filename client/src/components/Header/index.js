


import React from 'react';

import Auth from '../../utils/auth';

import { Link } from 'react-router-dom';

const Header = () => {

  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>Help Exchange</h1>
        </Link>

        <nav className="text-center">
  {Auth.loggedIn() ? (
    <>
      <Link to="/profile">Me</Link>
      <a href="/" onClick={logout}>
        Logout
      </a>
    </>
  ) : (
    <>
    <Link to="/home">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
    <Link to='/Donations'>Donations</Link>
    </>
  )}
</nav>
      </div>
    </header>
  );
};

export default Header;










// import React from 'react'
// import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// import Navigation from '../Nav/index'
// import Navbar from 'react-bootstrap/Navbar';
// import About from '../About/index'

// import LoginForm from '../LoginForm/index'

// import Volunteer from '../LoginForm/index'
// import RequestHelp from '../Donations/index'
// import Home from '../Footer';

// function Header() {

//     return (
//         <HashRouter>
//             <Navbar className='header'>
//                     <Navbar.Brand>
//                         <p className='navcolor'>
//                         <img src="https://img.icons8.com/cotton/64/000000/volunteering.png"/>
//                             Help Exchange
//                         </p>
//                     </Navbar.Brand>
//                 <Navigation />
//             </Navbar>

//             <div className='container' style={{ marginBottom:'150px' }}>
//                 <Switch>
//                     <Route exact path="/" render={() => (<Redirect to="/about"/>)}/>
//                     {/* <Route path='/contact' component={Contact} /> */}
//                     <Route path="/about" component={Home}/>
//                     <Route path='/LoginForm' component={LoginForm} />
//                     <Route path='/LoginForm' component={Volunteer} />
//                     <Route path='/RequestHelp' component={RequestHelp} />
//                     <Route path='/Donations' component={Donations} />
//                 </Switch>
//             </div>
//         </HashRouter>

//     )
// }



// export default Header;

