import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  nombre;
  apellido;
  correoElectronico;
  pais;
  ciudad;
  numeroTelefono;
  fechaNacimiento;
  picker;
  constructor() { }

  ngOnInit() {
  }
  registroUsuario(formulario) {
    const controles = formulario.controls;
    const nombre = controles.nombre.value;
    const apellido = controles.apellido.value;
    const correo = controles.correoElectronico.value;
    const pais = controles.pais.value;
    const cuidad = controles.ciudad.value;
    const telefono = controles.telefono.value;
    const nacimiento = controles.nacimiento.value;

  }
}
