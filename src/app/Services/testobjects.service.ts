import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry, retryWhen, delayWhen } from 'rxjs/operators';
import { testobject } from '../Model/testobject';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestobjectsService {

  readonly baseURL = environment.BACKEND_URL;

  constructor(private httpClient: HttpClient) { }

  getTestobjects(): Observable<testobject[]> {
    return this.httpClient.get<testobject[]>(this.baseURL).pipe(
      catchError((err) => {
        if (err.status == 403)
          alert('You don\'t have the permission to do that!')

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    );
  }

  postTestobject(testobject: testobject): Observable<testobject> {
    return this.httpClient.post<testobject>(this.baseURL, testobject).pipe(
      catchError((err) => {
        if (err.status == 403)
          alert('You don\'t have the permission to do that!')

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    );
  }

  deleteTestobject(id: string) {
    return this.httpClient.delete(this.baseURL + '/' + id).pipe(
      catchError((err) => {
        if (err.status == 403)
          alert('You don\'t have the permission to do that!')

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
      })
    );
  }
}
