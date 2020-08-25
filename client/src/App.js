import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// add these two library import statements
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';

import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import SingleRequest from './pages/SingleRequest';
import Profile from './pages/Profile';
import Signup from './pages/Signup';


import Donations from './pages/Donations';
import Home from './pages/Home';

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    });
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
         <Nav/>
          <Header />
          <div className="container">
            <Switch>
            {/* <Route exact path="/" component={About} /> */}
              <Route exact path="/home" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/request/:id" component={SingleRequest} />
              //<Route exact path="/Donations" component={Donations} />
              

              <Route component={NoMatch} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
