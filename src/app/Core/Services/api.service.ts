import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError, Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(protected http: HttpClient) { }

  // observe you will get the data from server as long as you Subscript --- also called lazy
  // only will do something when it gets some observation
  // observable can be cancelled
  getAll(path: string): Observable<any[]> {
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[]),
      // any[] array with any type
      // convert the type to type which you want
      catchError(this.handleError)
    );
  }

  getMovieByGenre(path: string):Observable<any[]>{
    return this.http.get(`${environment.apiUrl}${path}`).pipe(
      map(resp => resp as any[]),
      // any[] array with any type
      // convert the type to type which you want
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(error.error.errorMessage);
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.message}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error.error.errorMessage);

  }
}
