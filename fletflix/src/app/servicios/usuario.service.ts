import {Injectable} from "@angular/core";

@Injectable()
export class UsuarioService {

}
export interface Usuario {
  tipoUsuario:string,
   nombre: string,
   apellido: string,
   fechaNacimiento: number,
   pais: string,
   ciudad: string,
   numeroTelefono :number,
   correoElectronico: string

}
