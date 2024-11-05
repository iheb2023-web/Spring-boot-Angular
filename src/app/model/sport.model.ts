import { Genre } from "./genre.model";
import { Image } from "./Image.model";



export class sport{
    idSport! : number;
    nomSport?: string;
    description?: string;
    dateFondation?: Date;
    genre!: Genre;
    images! : Image[];
    imageStr!:string;
}