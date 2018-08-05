import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PeliculasService {

  constructor(private http: HttpClient) {

  }
  id;
  setIdPelicula(id){
    this.id=id;
  }

}
export interface results {
  overview:string,
  title:string,
  vote_average: string,
  poster_path: string,
  key:string,
  id:string,
  genres:string
  homepage:string,
  original_languaje:string,
  release_date:string,
  home_page: string,
  original_title:string
}
export interface genres {
  name:string
}
export interface Peliculas{
  results:results[]
}
