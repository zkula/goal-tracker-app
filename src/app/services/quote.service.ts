import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private quoteUrl = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) { }

  getQuote(): Observable<any> {
    return this.http.get<any>(this.quoteUrl).pipe(
      tap(date=> console.log('All: ' + JSON.stringify(date))),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      //a client-side or network error occurred
      errorMessage = `An error occurred: ${err.error.message}`
    }
    else {
      //Backend returned an unsuccessful response code
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

