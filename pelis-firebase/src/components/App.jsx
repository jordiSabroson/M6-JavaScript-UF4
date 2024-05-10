import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import MovieList from './pages/MovieList';
// import AddMovie from './pages/AddMovie';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/movies/list" element={<MovieList />} /> */}
                {/* <Route path="/movies/add" element={<AddMovie />} /> */}
            </Routes>
        </Router>
    );
};

export default App;