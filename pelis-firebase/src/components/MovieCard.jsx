import React from "react";
import './styles/MovieCard.css';

const MovieCard = ({ title, image, rate, direction }) => {
    return (
        <div className="movie-card">
            <img src={image} alt={title} />
            <div className="movie-details">
                <h2>{title}</h2>
                <p>Rate: {rate}</p>
                <p>Direction: {direction}</p>
            </div>
        </div>
    );
};

export default MovieCard;