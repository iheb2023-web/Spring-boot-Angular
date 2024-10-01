import { Genre } from "./genre.model";

export class GenreWrapped{ 
    _embedded!: { genres : Genre[]}; 
} 