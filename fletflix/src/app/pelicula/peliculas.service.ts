import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import {EventEmitter} from "@angular/core";
@Injectable()
export class PeliculasService {
  pelicula:Peliculas[];
  cambioPelicula:EventEmitter<Peliculas[]>=new EventEmitter();
  constructor(private http: HttpClient) {

  }
  id;
  idSerie;
  setIdPelicula(id){
    this.id=id;
  }
  setIdSeries(id){
    this.idSerie=id;
  }

  emitirCambioPelicula(pelicula){
    this.pelicula=pelicula;
    this.cambioPelicula.emit(pelicula);
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
export interface seasons {
  name:string
  poster_path: string,
  season_number:string;
  overview:string,
}
export interface Peliculas{
  results:results[]
  seasons:seasons[]
}
