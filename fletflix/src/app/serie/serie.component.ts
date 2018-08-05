import { Component, OnInit } from '@angular/core';
import {Peliculas, results} from "../pelicula/peliculas.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  peliculas: results[];
  detalle = "http://image.tmdb.org/t/p/w185/";
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Peliculas>('https://api.themoviedb.org/3/tv/popular?api_key=aadcd48bce7b149720bb697228318d87&language=es')
      .subscribe((value: Peliculas) => {
          this.peliculas = value.results;
        }
      );
  }

}
