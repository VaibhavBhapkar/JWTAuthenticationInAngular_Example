import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from './service';
import { User } from '../Model/User';


@Injectable({
  providedIn: 'root'
})

export class TokenGen {
  constructor(private http: HttpClient, private service: Service) {
  }
  GetToken(userInfo: User) {
    return this.service.POST('api/Login/loginfo', userInfo);
  }
  GetData() {
    return this.service.GETWithToken('api/weatherforecast');
  }
}
