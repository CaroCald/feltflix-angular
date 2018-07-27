import { Component, OnInit } from '@angular/core';
import {PeliculasService, Peliculas, results} from "./peliculas.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
peliculas:results[];
detalle="http://image.tmdb.org/t/p/w185/";
  constructor(private servicioPelicula: PeliculasService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Peliculas>('https://api.themoviedb.org/3/movie/popular?api_key=aadcd48bce7b149720bb697228318d87&language=es').subscribe((value:Peliculas) => {
      this.peliculas=value.results;
      }

    )
  }

}
