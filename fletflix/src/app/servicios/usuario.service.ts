import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/index";
@Injectable()
export class UsuarioService {
  userUrl = 'http://localhost:3000/Usuario/mostrar';

  constructor(private http: HttpClient) {

  }

  addUser(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.userUrl, usuario, httpOptions)
  }
}
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

export interface Usuario {
  tipoUsuario: string;
   nombre: string,
   apellido: string,
   fechaNacimiento: number,
   pais: string,
   ciudad: string,
   numeroTelefono :number,
   correoElectronico: string

}
