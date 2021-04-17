import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class User {

  userName: string;
  fullName: string;
  password: string;
  userRole: string;
  token: string;
  constructor() {
    this.userName = "";
    this.fullName = "";
    this.password = "";
    this.userRole = "";
    this.token = "";
  }
} 
