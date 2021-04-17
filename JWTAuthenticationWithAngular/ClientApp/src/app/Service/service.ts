import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Service {
  _baseURL: string;
  errorMsg: string;
  usertoken: any;
  private headers: HttpHeaders;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {

    this._baseURL = baseUrl;

  }
  ngOnInit() {
   
  }
  GET(url: string): Observable<any> {
    return this.http.get(this._baseURL + url);
  }
  GETWithParams(url: string, params: HttpParams): Observable<any> {
    return this.http.get(this._baseURL + url, { params: params, headers: this.headers });
  }

  GETWithToken(url: string): Observable<any> {
    this.usertoken = sessionStorage.getItem("token");
    return this.http.get(this._baseURL + url, {
      headers: new HttpHeaders().set('Authorization', "Bearer " + this.usertoken)
    }).pipe(catchError(error => {
      if (error.error instanceof ErrorEvent) {
        this.errorMsg = `Error: ${error.error.message}`;
      } else {
        this.errorMsg = `Error: ${error.error.message}`;      }

      return throwError(this.errorMsg);
    }));
  }  

  POST(url: string, params: any): Observable<any> {
    this.usertoken = sessionStorage.getItem("token");
    return this.http.post(this._baseURL + url, params);
  }

} 
