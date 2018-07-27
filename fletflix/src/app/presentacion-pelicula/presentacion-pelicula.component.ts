import { Component, OnInit } from '@angular/core';
import {Peliculas, results} from "../pelicula/peliculas.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-presentacion-pelicula',
  templateUrl: './presentacion-pelicula.component.html',
  styleUrls: ['./presentacion-pelicula.component.css']
})
export class PresentacionPeliculaComponent implements OnInit {
  peliculas:results;
  detalles={
    trailer:''
};
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<Peliculas>('http://api.themoviedb.org/3/movie/550/videos?api_key=aadcd48bce7b149720bb697228318d87&language=es').subscribe((value:Peliculas) => {
        this.detalles.trailer='https://www.youtube.com/embed/'+value.results[0].key;
        console.log(value.results[0].key)
      }
    );
  }

}
