import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
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
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule, MatToolbarModule} from "@angular/material";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PresentacionPeliculaComponent } from './presentacion-pelicula/presentacion-pelicula.component';
import {FormsModule} from "@angular/forms";
import { PeliculaDramaComponent } from './pelicula-drama/pelicula-drama.component';
import { PeliculaAccionComponent } from './pelicula-accion/pelicula-accion.component';
import { PeliculaTerrorComponent } from './pelicula-terror/pelicula-terror.component';
import { PeliculaPopularesComponent } from './pelicula-populares/pelicula-populares.component';
import { VerPeliculaComponent } from './ver-pelicula/ver-pelicula.component';
import {RegistroComponent} from "./registro/registro.component";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { CookieService } from 'ngx-cookie-service';
import { SerieComponent } from './serie/serie.component';
import { SeriePresentacionComponent } from './serie-presentacion/serie-presentacion.component';
import { CardSerieComponent } from './card-serie/card-serie.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ReconocimientoFacialComponent } from './reconocimiento-facial/reconocimiento-facial.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CardPeliculaComponent,
    PeliculaComponent,
    NavBarComponent,
    PaginaPrincipalComponent,
    PresentacionPeliculaComponent,
    PeliculaDramaComponent,
    PeliculaAccionComponent,
    PeliculaTerrorComponent,
    PeliculaPopularesComponent,
    VerPeliculaComponent,
    RegistroComponent,
    SerieComponent,
    SeriePresentacionComponent,
    CardSerieComponent,
    SearchBarComponent,
    ReconocimientoFacialComponent
  ],
  imports: [
    MatButtonModule,MatBadgeModule, FormsModule, MatInputModule,MatSelectModule, MatToolbarModule,
    HttpClientModule, MatDatepickerModule,MatRadioModule
    ,MatCardModule,BrowserAnimationsModule,BrowserModule,RouterModule.forRoot(
      RUTAS_APP,
      {
        useHash: true
      }
    )
  ],
  providers: [PeliculasService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
