import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexMenu from './pages/IndexMenu';
import MovieList from './pages/MovieList';
import AddMovie from './pages/AddMovie';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={IndexMenu} />
      <Route path="/movies/list" component={MovieList} />
      <Route path="/movies/add" component={AddMovie} />
    </Router>
  );
};

export default App;