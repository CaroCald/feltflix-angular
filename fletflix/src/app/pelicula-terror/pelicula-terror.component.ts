import { Component, OnInit } from '@angular/core';
import {Peliculas, PeliculasService, results} from "../pelicula/peliculas.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pelicula-terror',
  templateUrl: './pelicula-terror.component.html',
  styleUrls: ['./pelicula-terror.component.css']
})
export class PeliculaTerrorComponent implements OnInit {

  peliculas: results[];
  detalle = "http://image.tmdb.org/t/p/w185/";

  constructor(private servicioPelicula: PeliculasService, private http: HttpClient, private router:Router) {
  }
  ngOnInit() {
    this.cargarTerror();
    this.escucharCambiosPelicula();
  }

  cargarTerror() {
    this.http.get<Peliculas>('https://api.themoviedb.org/3/discover/movie?api_key=aadcd48bce7b149720bb697228318d87&language=es&with_genres=27')
      .subscribe((value:Peliculas) => {
          this.peliculas=value.results;
        }

      )
  }
  escucharCambiosPelicula(){
    this.servicioPelicula.cambioPelicula.subscribe((value: Peliculas)=> this.peliculas=value.results);
  }
}
