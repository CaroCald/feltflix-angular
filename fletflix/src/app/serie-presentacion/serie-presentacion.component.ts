import { Component, OnInit } from '@angular/core';
import {Peliculas, PeliculasService, results, seasons} from "../pelicula/peliculas.service";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-serie-presentacion',
  templateUrl: './serie-presentacion.component.html',
  styleUrls: ['./serie-presentacion.component.css']
})
export class SeriePresentacionComponent implements OnInit {

  peliculas:results;
  detalle="http://image.tmdb.org/t/p/w185/";
  trailer:any;
  titulo;
  anio;
  home_page;
  puntuacion;
  titulo_original;
  series;
  detallesSeries={
    nombreSeason:'',
    numero:'',
    detalle2:"http://image.tmdb.org/t/p/w185/",
    overview:''

};

  constructor(private http: HttpClient, private sanitizer: DomSanitizer, private servicioPelicula: PeliculasService) { }
  descripcion;

  ngOnInit() {
    this.http.get<results>('https://api.themoviedb.org/3/tv/'+this.servicioPelicula.idSerie+'?api_key=aadcd48bce7b149720bb697228318d87&language=es').subscribe((value:results) => {
        this.descripcion=value.overview;
        this.detalle=this.detalle+value.poster_path;
        this.titulo=value.title;
        this.anio=value.release_date;
        this.home_page=value.home_page;
        this.titulo_original=value.original_title;
        this.puntuacion=value.vote_average
      }

    );
    this.http.get<Peliculas>('https://api.themoviedb.org/3/tv/'+this.servicioPelicula.idSerie+'?api_key=aadcd48bce7b149720bb697228318d87&language=es').subscribe((value:Peliculas) => {
      value.seasons.map((value1:seasons) =>console.log(value1.overview));
      }

    )
  }

}
