import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/Ipost';
import { Observable, of, catchError, map, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // public posts: IPost[] = []
  private url = 'https://ux-exercise.azurewebsites.net/api/posts';

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }

}
