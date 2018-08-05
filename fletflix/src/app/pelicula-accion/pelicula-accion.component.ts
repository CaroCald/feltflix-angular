import { Component, OnInit } from '@angular/core';
import {Peliculas, PeliculasService, results} from "../pelicula/peliculas.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Usuario} from "../servicios/usuario.service";

@Component({
  selector: 'app-pelicula-accion',
  templateUrl: './pelicula-accion.component.html',
  styleUrls: ['./pelicula-accion.component.css']
})
export class PeliculaAccionComponent implements OnInit {
  peliculas: results[];
  detalle = "http://image.tmdb.org/t/p/w185/";

  constructor(private servicioPelicula: PeliculasService, private http: HttpClient, private router:Router) {
  }
  ngOnInit() {
    this.cargarAccion()
  }
  cargarAccion() {
    this.http.get<Peliculas>('https://api.themoviedb.org/3/discover/movie?api_key=aadcd48bce7b149720bb697228318d87&language=es&with_genres=28')
      .subscribe((value: Peliculas) => {
          this.peliculas = value.results;
        }
      );
    this.http.get<Usuario>('http://localhost:3000/Usuario/mostrar')
      .subscribe((value: Usuario) => {
         console.log(value)
        }
      )
  }

}
