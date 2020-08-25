import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Request from './pages/Request';
import About from './pages/About';
// import Contact from './components/Contact';
import Donations from './pages/Donations';
import Footer from './components/Footer';
// import Header from './components/Header';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
// import SingleRequest from './pages/SingleRequest';
import NoMatch from './pages/NoMatch';




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
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/request" component={Request} />
              <Route exact path="/profile/:username?" component={Profile} />

              <Route component={NoMatch} />
            </Switch>
          </>
          <Footer />
        </Router>
    </ApolloProvider>
  );
}

export default App;
