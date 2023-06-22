import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Tili from '../pages/Tili';
import MainPage from '../pages/MainPage';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem('loggedIn'); // Tarkistaa, onko käyttäjä kirjautunut sisään
console.log(localStorage);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" /> // Ohjaa käyttäjä pääsivulle, jos ei ole kirjautunut sisään
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <Switch>
        {/* Määrittele julkiset reitit */}
        <Route exact path="/" component={MainPage} />
        
        {/* Määrittele yksityinen reitti */}
        <PrivateRoute path="/tili" component={Tili} />
      </Switch>
    </Router>
  );
};

export default Routes;
