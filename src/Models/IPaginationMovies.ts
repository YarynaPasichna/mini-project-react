import {IMovies} from "@/Models/IMovies";
import {IPaginationPage} from "@/Models/IPaginationPage";

export interface IPaginationMovies {
    total_items:number,
    total_pages: number,
    prev:IPaginationPage,
    next:IPaginationPage,
    results:IMovies[]
}