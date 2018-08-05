import {Component, Input, OnInit} from '@angular/core';
import {PeliculasService} from "../pelicula/peliculas.service";

@Component({
  selector: 'app-card-serie',
  templateUrl: './card-serie.component.html',
  styleUrls: ['./card-serie.component.css']
})
export class CardSerieComponent implements OnInit {
  @Input() descripcion;
  @Input() imagen;
  @Input() titulo;
  @Input() popularidad;
  @Input()id;

  constructor(private service: PeliculasService) { }

  ngOnInit() {
  }
  colocarId(id){
    this.service.setIdSeries(id)
  }

}
