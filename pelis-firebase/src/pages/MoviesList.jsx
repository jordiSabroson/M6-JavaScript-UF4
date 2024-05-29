import React, { useState, useEffect } from 'react';
import { database } from '../config/config'; // Assuming correct import path
import { collection, getDocs, query } from 'firebase/firestore'; // Import Firestore functions
import MovieCard from '../components/MovieCard';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Fetch movies from Firestore
        const fetchMovies = async () => {
            const moviesCollectionRef = collection(database, 'movies'); // Reference movies collection
            const q = query(moviesCollectionRef); // Create an empty query (optional)

            const querySnapshot = await getDocs(q); // Get all movies in the collection
            const moviesData = querySnapshot.docs.map((doc) => ({
                ...doc.data(), // Extract data from each document
                id: doc.id, // Add document ID for potential use
            }));
            setMovies(moviesData);
        };

        fetchMovies();
    }, []);

    return (
        <div className="movie-list">
            {movies.map((movie, index) => (
                <MovieCard
                    key={movie.id || index} // Use document ID as key if available
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
