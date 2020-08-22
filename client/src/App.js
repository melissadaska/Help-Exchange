import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import About from './components/About';
// import Contact from './components/Contact';
import Donations from './components/Donations';
import Footer from './components/Footer';
// import Header from './components/Header';
import LoginForm from './components/LoginForm';
import RequestHelp from './components/RequestHelp';
import Volunteer from './components/Volunteer';



const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <>
            <Navbar />
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/about" component={About} />
              <Route exact path="/donations" component={Donations} />
              <Route exact path="/loginform" component={LoginForm} />
              <Route exact path="/requesthelp" component={RequestHelp} />
              <Route exact path="/volunteer" component={Volunteer} />

              {/* <Route component={NoMatch} /> */}
            </Switch>
          </>
          <Footer />
        </Router>
    </ApolloProvider>
  );
}

export default App;
