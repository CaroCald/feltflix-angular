import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {PeliculaComponent} from "./pelicula/pelicula.component";
import {PaginaPrincipalComponent} from "./pagina-principal/pagina-principal.component";
import {PresentacionPeliculaComponent} from "./presentacion-pelicula/presentacion-pelicula.component";

export const RUTAS_APP: Routes = [
  {
    path: 'inicio',
    component: HomeComponent,

  },
  {
    path: 'login',
    component: LoginComponent,

  },
  {
    path: 'registro',
    component: RegistroComponent,

  },
  {
    path: 'peliculas',
    component: PaginaPrincipalComponent,

  },
  {
    path: 'presentacion',
    component: PresentacionPeliculaComponent

  },
  {
    path: '**',
    component: HomeComponent
  }
];
