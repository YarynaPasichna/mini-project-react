'use client';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import React, {useState, useEffect} from "react";
import {searchService} from "@/Services/api.services";
import Link from "next/link";
import {ISearchedMovies} from "@/Models/ISearchedMovies";

export default function Search({ placeholder }: { placeholder: string }) {
    const {replace} = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [movies, setMovies] = useState<ISearchedMovies[]>([]);
    const [query, setQuery] = useState('');
    const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        const queryParams = searchParams.get('query');
        if (queryParams) {
            setQuery(queryParams);
            fetchService(queryParams);
        }
    }, [searchParams]);

    const fetchService = async (term: string) => {
        const response = await searchService(term);
        setMovies(response.results);
    };

    function handleSearch(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params}`);
        setQuery(term);
    }

    return (
        <div>
            <input
                id="search"
                placeholder={placeholder}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={query}
            />
            <div className="movies-list">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <Link href={{ pathname: '/movies/' + movie.id, query: { data: JSON.stringify(movie) } }}>
                            <img src={`${imageBaseURL}${movie.poster_path}`} alt={movie.name} />
                        </Link>
                        <h3>{movie.name}</h3>
                    </div>
                ))}
            </div>


            </div>
    );
}








