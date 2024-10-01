import { Genre } from "./genre.model";

export class sport{
    idSport! : number;
    nomSport?: string;
    description?: string;
    dateFondation?: Date;
    genre!: Genre;
}