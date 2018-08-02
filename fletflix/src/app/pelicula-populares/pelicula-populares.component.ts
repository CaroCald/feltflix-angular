import { Component, OnInit } from '@angular/core';
import {Peliculas, PeliculasService, results} from "../pelicula/peliculas.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pelicula-populares',
  templateUrl: './pelicula-populares.component.html',
  styleUrls: ['./pelicula-populares.component.css']
})
export class PeliculaPopularesComponent implements OnInit {
  peliculas: results[];
  detalle = "http://image.tmdb.org/t/p/w185/";

  constructor(private servicioPelicula: PeliculasService, private http: HttpClient, private router:Router) {
  }

  ngOnInit() {
    this.http.get<Peliculas>('https://api.themoviedb.org/3/movie/popular?api_key=aadcd48bce7b149720bb697228318d87&language=es').subscribe((value: Peliculas) => {
        this.peliculas = value.results;
      }
    )

  }
}
