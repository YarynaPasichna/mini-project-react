import React from 'react';
import {IMovies} from "@/Models/IMovies";
import {getMoviesByGanres} from "@/Services/api.services";
import StarRate from "@/Components/StarRate/StarRate";
import Link from "next/link";
import './genre.css'

const Genre = async ({searchParams}:any) => {
    let moviesByGanres = JSON.parse(searchParams.data)
    let movie:IMovies[]= await getMoviesByGanres(moviesByGanres.id)
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
    return (
        <div className="genres-list">
            {
                movie.map(movie => (
                    <div key={movie.id} className= 'genre-card'>
                        <Link href={{ pathname: '/movies/' + movie.id, query: { data: JSON.stringify(movie) } }}>
                            <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title} />
                        </Link>
                        <h3>{movie.title}</h3>
                        <StarRate rating={movie.vote_average / 2} />
                    </div>
                    )
                )
            }
        </div>
    );
};

export default Genre;



