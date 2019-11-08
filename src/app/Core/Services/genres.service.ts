import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/Shared/Models/genre';

@Injectable({
  // can be used cross the angular
  providedIn: 'root'
})
export class GenresService {

  constructor(private apiservice: APIService) { }

  GetAllGenres(): Observable<Genre[]> {
      return this.apiservice.getAll('/genre');
  }
}
