import {Component, Input, OnInit} from '@angular/core';
import {PeliculasService} from "../pelicula/peliculas.service";

@Component({
  selector: 'app-card-pelicula',
  templateUrl: './card-pelicula.component.html',
  styleUrls: ['./card-pelicula.component.css']
})
export class CardPeliculaComponent implements OnInit {
@Input() descripcion;
@Input() imagen;
  @Input() titulo;
  @Input() popularidad;
  @Input()id;

  constructor(private service: PeliculasService) { }


  ngOnInit() {
  }

  colocarId(id){
    this.service.setIdPelicula(id)
  }

}
