import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome'
import MoviesList from './pages/MoviesList';
import MoviesAdd from './components/MoviesAdd';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome username="jordi" />} />
        <Route path="movies/add" element={<MoviesAdd />} />
        <Route path="/movies/list" element={<MoviesList />} />

      </Routes>
    </Router >
  )
}

export default App