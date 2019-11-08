import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/Shared/movie';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiservices: APIService) { }
  getTopGrossingMovies():Observable<Movie[]>{
    return this.apiservices.getAll('/movie/topgrossing')
  }
  getMovieByGenre(id:number):Observable<Movie[]>{
    return this.apiservices.getMovieByGenre(`/genre/${id}/movies`)
  }
}
