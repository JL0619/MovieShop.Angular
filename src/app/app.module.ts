import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { GenresComponent } from './genres/genres.component';
import { HeaderComponent } from './core/layout/header/header.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { HomeComponent } from './home/home.component';
import { MovieCardComponent } from './shared/component/movie-card/movie-card.component';

/*attributes*/
@NgModule({
  declarations: [
    AppComponent,
    GenresComponent,
    HeaderComponent,
    MovieListComponent,
    HomeComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
