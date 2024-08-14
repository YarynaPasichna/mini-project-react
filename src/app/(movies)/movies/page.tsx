import React from 'react';
import { getMovies } from "@/Services/api.services";
import { IPaginationMovies } from "@/Models/IPaginationMovies";
import PaginationComponent from "@/Components/PaginationComponent/PaginationComponent";
import Link from "next/link";
import StarRate from "@/Components/StarRate/StarRate";
import Search from "@/Components/SearchComponent/SearchComponent";
import "./movies.css"

interface MoviesPageProps {
    searchParams: {
        page?: string;
        query?: string;
    };
}

export default async function MoviesPage({ searchParams }: MoviesPageProps) {
    const currentPage = parseInt(searchParams.page || '1', 10);
    const query = JSON.stringify(searchParams.query || '');
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500';
    const moviesData: IPaginationMovies = await getMovies(currentPage.toString(), query);

    return (
        <div>
            <div className="search-container">
                <img src='https://img.icons8.com/?size=100&id=7695&format=png&color=000000' className='search-img'/>
                <Search placeholder={"Search movie..."}/>
            </div>
            <div className="movies-list">
                {moviesData.results.map((movie) => (
                    <div key={movie.id}>
                        <div className="movie-card">
                            <Link href={{pathname: '/movies/' + movie.id, query: {data: JSON.stringify(movie)}}}>
                                <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.title}/>
                            </Link>
                            <h3>{movie.title}</h3>
                            <StarRate rating={movie.vote_average / 2}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination-container">
                <PaginationComponent
                    totalPages={moviesData.total_pages}
                    currentPage={currentPage}
                    query={query}
                />
            </div>
        </div>
    );
}
