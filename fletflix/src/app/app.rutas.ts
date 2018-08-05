import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {PaginaPrincipalComponent} from "./pagina-principal/pagina-principal.component";
import {PresentacionPeliculaComponent} from "./presentacion-pelicula/presentacion-pelicula.component";
import {PeliculaDramaComponent} from "./pelicula-drama/pelicula-drama.component";
import {PeliculaAccionComponent} from "./pelicula-accion/pelicula-accion.component";
import {PeliculaTerrorComponent} from "./pelicula-terror/pelicula-terror.component";
import {PeliculaPopularesComponent} from "./pelicula-populares/pelicula-populares.component";
import {RegistroComponent} from "./registro/registro.component";
import {PeliculaComponent} from "./pelicula/pelicula.component";
import {SerieComponent} from "./serie/serie.component";
import {SeriePresentacionComponent} from "./serie-presentacion/serie-presentacion.component";

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
    path: 'verPelicula',
    component: PeliculaComponent,

  },
  {
    path: 'series',
    component: SerieComponent,

  },
  {
    path: 'seriePresentacion',
    component: SeriePresentacionComponent,

  },
  {
    path: 'peliculas',
    component: PaginaPrincipalComponent,
    children:[
      {
        path: 'drama',
        component: PeliculaDramaComponent,

      },
      {
        path: 'accion',
        component: PeliculaAccionComponent,

      },
      {
        path: 'terror',
        component: PeliculaTerrorComponent,

      },
      {
        path: 'populares',
        component: PeliculaPopularesComponent,

      },
      {
        path: '**',
        component: PeliculaPopularesComponent

      }
    ]



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
