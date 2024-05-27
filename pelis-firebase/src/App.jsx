import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './components/Welcome';
import MoviesList from './pages/MoviesList';
import MoviesAdd from './pages/MoviesAdd';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Welcome username="usuari" />
        </Route>
        <Route path="/movies/list" component={MoviesList} />
        <Route path="/movies/add" component={MoviesAdd} />
      </Switch>
    </Router>
  );
};

export default App;