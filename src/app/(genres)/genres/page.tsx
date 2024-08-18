import React from 'react';
import { IGenres } from "@/Models/IGenres";
import { getGenres } from "@/Services/api.services";
import Link from "next/link";
import './genres.css';

const GenresPage = async (): Promise<any> => {
    const genres: IGenres[] = await getGenres();
    return (
        <div className="genres-container">
            <h1 className="genres-title">Genres</h1>
            <div className="genres-list">
                {genres.map((genre) => (
                    <div key={genre.id} className="genre-card">
                        <Link href={{ query: { data: JSON.stringify(genre) }, pathname: `/genres/${genre.id}` }}>
                            <h2>{genre.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GenresPage;




