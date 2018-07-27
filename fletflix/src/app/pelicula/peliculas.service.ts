import {Injectable} from "@angular/core";
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PeliculasService {
  constructor(private http: HttpClient) {

  }


}
export interface results {
  overview:string,
  title:string,
  vote_average: string,
  poster_path: string,
  key:string
}
export interface Peliculas{
  results:results[]
}
