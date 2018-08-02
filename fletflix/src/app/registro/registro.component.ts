import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs/index";
import {Usuario} from "../servicios/usuario.service";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
user:Usuario;
userUrl='http://localhost:3000/usuario/crear';
  constructor(private http:HttpClient) { }

  nombre;
  apellido;
  correoElectronico;
  pais;
  ciudad;
  numeroTelefono;
  fechaNacimiento;

  ngOnInit() {
  }
  addUsuario (usuario:UsuarioP): Observable<Usuario> {
    return this.http.post<Usuario>(this.userUrl, usuario, httpOptions)

  }
  crearUsuario(){
   this.addUsuario(new UsuarioP(this.nombre, this.apellido, this.fechaNacimiento, this.pais, this.ciudad,this.numeroTelefono ,this.correoElectronico))
  }

}
export class UsuarioP {
  constructor(
    public nombre: string,
    public apellido: string,
    public fechaNacimiento: number,
    public pais: string,
    public ciudad: string,
    public numeroTelefono :number,
    public correoElectronico: string) {

  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
