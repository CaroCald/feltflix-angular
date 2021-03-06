import { Component, OnInit } from '@angular/core';
import {Peliculas, PeliculasService, results} from "../pelicula/peliculas.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  constructor(private servicioPelicula: PeliculasService, private http: HttpClient, private router:Router) {
  }

  peliculas: results[];
  detalle = "http://image.tmdb.org/t/p/w185/";
  ngOnInit() {
  }
  cargarDrama() {
    this.http.get<Peliculas>('https://api.themoviedb.org/3/discover/movie?api_key=aadcd48bce7b149720bb697228318d87&language=es&with_genres=18')
      .subscribe((value: Peliculas) => {
          this.peliculas = value.results;
        }
      )
  }
}
