import { IPaginationMovies } from "@/Models/IPaginationMovies";
import { token } from "@/Constans/Token";
import {GenresURL, MovieURL} from "@/Constans/URL";
import {IGenres} from "@/Models/IGenres";
import {ISearchedMovies} from "@/Models/ISearchedMovies";

const options = () => ({
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
    },
});

export const getMovies = async (page: string, query: string = ''): Promise<IPaginationMovies> => {
    const url = `${MovieURL}?page=${page}&query=${encodeURIComponent(query)}`;
    const response = await fetch(url, options());
    return response.json();
};
export const getGenres = async (): Promise<IGenres[]> => {
        const response = await fetch(GenresURL, options())
        const data = await response.json();
        return data.genres;
};
export const getMoviesByGanres = async (id:number):Promise<any> =>{
    const url = `${MovieURL}?with_genres=${id}`
    const response = await fetch(url,options())
    const data = await response.json();
    return data.results;
}
interface ISearchResponse {
    results: ISearchedMovies[];
}
export const searchService = async (term: string): Promise<ISearchResponse> => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${term}`;
    const response = await fetch(url, options());
    const data = await response.json();
    return data;
}

