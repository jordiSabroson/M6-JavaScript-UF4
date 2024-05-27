// src/pages/MoviesList.jsx
import React, { useState, useEffect } from 'react';
import { database } from '../config/config';
import { ref, get } from 'firebase/database';
import MovieCard from '../components/MovieCard';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Llegeix les pel·lícules de Firebase
        const fetchMovies = async () => {
            const snapshot = await get(ref(database, 'movies'));
            const moviesData = snapshot.val();
            if (moviesData) {
                const moviesArray = Object.values(moviesData);
                setMovies(moviesArray);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <MovieCard
                    key={index}
                    title={movie.title}
                    image={movie.imageURL}
                    rate={movie.rating}
                    direction={movie.director}
                />
            ))}
        </div>
    );
};

export default MoviesList;
