import { Component, OnInit } from '@angular/core';
import {Peliculas, PeliculasService, results} from "../pelicula/peliculas.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private servicioPelicula: PeliculasService, private http: HttpClient, private router:Router) {
  }
  peliculas: results[];
  param;

  ngOnInit() {

  }

  retomarBusqueda(parametro) {
    this.http.get<Peliculas>('https://api.themoviedb.org/3/search/movie?api_key=aadcd48bce7b149720bb697228318d87&query='+parametro)
      .subscribe((value: Peliculas) => {
          this.servicioPelicula.emitirCambioPelicula(value);
        }
      );
  }
}
