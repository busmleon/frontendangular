import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { testobject } from '../Model/testobject';

@Injectable({
  providedIn: 'root'
})
export class TestobjectsService {

  readonly baseURL = 'http://localhost:3000/db';


  constructor(private httpClient: HttpClient) { }

  getTestobjects(): Observable<testobject[]>{
    return this.httpClient.get<testobject[]>(this.baseURL);
  }

  postTestobject(testobject: testobject): Observable<testobject>{
    return this.httpClient.post<testobject>(this.baseURL, testobject);
  }

  deleteTestobject(id: string) {
    return this.httpClient.delete(this.baseURL + '/' + id);
  }
}
