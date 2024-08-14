import React from 'react';
import "./movie.css";

const Movie = ({ searchParams }: any) => {
    let movie = JSON.parse(searchParams.data);
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
    return (
        <div>
            <h1>{movie.title}</h1>
            <div className="container">
                <div className="img-box">
                    <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title}/>
                </div>
                <div className="text">
                    <p>Release Date: {movie.release_date}</p>
                    <p>Average Rating: {movie.vote_average}</p>
                    <p>Popularity: {movie.popularity}</p>
                    <p>Short Overview: {movie.overview}</p>
                </div>
            </div>
        </div>
    );
};

export default Movie;







