import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {RouterModule} from "@angular/router";
import {RUTAS_APP} from "./app.rutas";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CardPeliculaComponent } from './card-pelicula/card-pelicula.component';
import {MatCardModule} from '@angular/material/card';
import { PeliculaComponent } from './pelicula/pelicula.component';
import {PeliculasService} from "./pelicula/peliculas.service";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PresentacionPeliculaComponent } from './presentacion-pelicula/presentacion-pelicula.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    CardPeliculaComponent,
    PeliculaComponent,
    NavBarComponent,
    PaginaPrincipalComponent,
    PresentacionPeliculaComponent
  ],
  imports: [
    MatButtonModule,MatBadgeModule,
    HttpClientModule,MatCardModule,BrowserAnimationsModule,BrowserModule,RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
