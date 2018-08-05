import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Usuario} from "../servicios/usuario.service";



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  nombre;
  apellido;
  correoElectronico;
  pais;
  ciudad;
  numeroTelefono;
  fechaNacimiento;
  picker;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.picker=new Date();
  }

  cargar(){
    this.http.get<Usuario>('http://localhost:3000/Usuario/mostrar')
      .subscribe((value: Usuario) => {
          console.log(value)
        }
      );

  }
  crear(){
    this.http.post<Usuario>('http://localhost:3000/Usuario/crear', {
      tipoUsuario:'general',
      nombre:this.nombre,
      apellido: this.apellido,
      correoElectronico: this.correoElectronico,
      pais:this.pais,
      ciudad: this.ciudad,
      numeroTelefono: this.numeroTelefono,
      fechaNacimiento:this.fechaNacimiento
    }, httpOptions).subscribe(value => console.log(value))
  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
